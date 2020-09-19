import React from "react";
import {
  Input,
  Button,
  Form,
  Popover,
  notification,
  Modal,
  Checkbox,
} from "antd";
import {
  Container,
  Background,
  Label,
  Banner,
} from "./StyledComponents/SignupLogin";

import { Link } from "react-router-dom";

//Ant D Icons
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import EmailConfirmation from "./EmailConfirmation.jsx";

import { Auth } from "aws-amplify";

import { withRouter } from "react-router";

const passwordValidator = require("password-validator");

const schema = new passwordValidator();

schema.is().min(8).has().uppercase().has().lowercase().has().digits();

const validationRules = (required, inputName, type, pattern) => [
  {
    required: required,
    message: "Please input your " + inputName,
    type: type,
    pattern: pattern,
  },
];

const formItemProps = {
  username: {
    rules: validationRules(true, "username", "string"),
  },
  password: {
    //Implement Custom Validation Rules
  },
  confirmPassword: {
    rules: [
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }

          return Promise.reject(
            "The two passwords that you entered do not match!"
          );
        },
      }),
    ],
  },
  email: {
    rules: validationRules(true, "email", "email"),
  },
};

const openSuccessfulNotification = (title, description) => {
  notification.open({
    message: title,
    description: description,
    icon: <CheckOutlined style={{ color: "green" }} />,
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const openUnsuccessfulNotification = (title, description) => {
  notification.open({
    message: title,
    description: description,
    icon: <CloseOutlined style={{ color: "red" }} />,
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailConfirmationVisible: false,
      email: "default@email.com",
      username: "",
      password: "",
    };
  }

  formRef = React.createRef();
  emailFormRef = React.createRef();

  render() {
    const title = "Password Policy";
    const passwordPolicyContent = (
      <React.Fragment>
        <h4>Your password should contain: </h4>
        <ul>
          <li>Minimum length of 8 characters</li>
          <li>Numerical characters (0-9)</li>
          <li>Special characters</li>
          <li>Uppercase letter</li>
          <li>Lowercase letter</li>
        </ul>
      </React.Fragment>
    );

    return (
      <Background>
        <Container style={{ marginTop: "5%" }}>
          <Banner style={{ marginTop: "0px", width: "100%" }}>
            Create a New Account
          </Banner>
          <div style={{ width: "70%" }}>
            <Form onFinish={this.handleSubmit} ref={this.formRef}>
              <Label style={{ marginTop: "24px" }}>Username</Label>
              <Form.Item {...formItemProps.username} name="username">
                <Input />
              </Form.Item>
              <Label>Password</Label>
              <Popover
                placement="right"
                title={title}
                content={passwordPolicyContent}
                trigger="focus"
              >
                <Form.Item
                  {...formItemProps.password}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        let errors = schema.validate(value, { list: true });

                        function getValidationMessage(errors) {
                          for (let i = 0; i < errors.length; i++) {
                            if (errors[i] === "min") {
                              return "Password length should be at least 8 characters";
                            } else if (errors[i] === "lowercase") {
                              return "Password should contain lowercase letters";
                            } else if (errors[i] === "uppercase") {
                              return "Password should contain uppercase letters";
                            } else if (errors[i] === "digits") {
                              return "Password should contain digits";
                            } else if (errors[i] === "symbols") {
                              return "Password should contain symbols";
                            }
                          }
                        }

                        if (
                          typeof getValidationMessage(errors) == "undefined"
                        ) {
                          return Promise.resolve();
                        }

                        return Promise.reject(getValidationMessage(errors));
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Popover>
              <Label>Confirm Password</Label>
              <Form.Item
                {...formItemProps.confirmPassword}
                name="confirm-password"
              >
                <Input.Password />
              </Form.Item>
              <Label>Display Name</Label>
              <Form.Item {...formItemProps.name} name="name">
                <Input />
              </Form.Item>
              <Label>E-Mail</Label>
              <Form.Item {...formItemProps.email} name="email">
                <Input />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            "Please read the Terms and Conditions and Privacy Agreement"
                          ),
                  },
                ]}
                name="termsAndConditions"
                valuePropName="checked"
                onChange={this.onChecked}
                style={{ textAlign: "left" }}
              >
                <Checkbox autoFocus={true}>
                  I agree to the{" "}
                  <a href="https://interninit.com/student-terms-and-conditions/" target="_blank" rel="noopener noreferrer">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="https://interninit.com/student-privacy-agreement/" target="_blank" rel="noopener noreferrer">
                    {" "}
                    Privacy Agreement{" "}
                  </a>
                </Checkbox>
              </Form.Item>
              <Button
                className="profile-button-style"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
              <Label style={{ marginTop: "10%" }}>
                Already have an account?
                <Link to="/login"> Log in here</Link>
              </Label>
            </Form>
          </div>
        </Container>
        <Modal
          title="Email Confirmation"
          visible={this.state.emailConfirmationVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <EmailConfirmation
            email={this.state.email}
            formRef={this.emailFormRef}
          />
        </Modal>
      </Background>
    );
  }

  handleSubmit = async (values) => {
    let { username, password, email, name } = values;
    this.setState({ email: email, username: username, password: password });
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
      });
      this.setState({ emailConfirmationVisible: true });
    } catch (error) {
      console.log("error signing up:", error);
      openUnsuccessfulNotification("Signup Error", error.message);
    }
  };

  handleOk = async (e) => {
    const values = await this.emailFormRef.current.getFieldsValue();
    const code = values.confirmationCode;
    console.log(values.confirmationCode);
    const username = this.state.username;
    const password = this.state.password;
    console.log(username);
    try {
      const callback = await Auth.confirmSignUp(username, code);
      console.log(callback);
      openSuccessfulNotification(
        "Success",
        "You will be redirected to the dashboard in a bit."
      );
      Auth.signOut()
        .then(() => console.log("Signed Out"))
        .catch(() => console.log("Could Not Sign Out"));

      const user = await Auth.signIn(username, password);
      this.props.newAuth();
      this.props.history.push("/dashboard");
    } catch (error) {
      console.log(error);
      openUnsuccessfulNotification(
        "Confirmation Code Error",
        "Sorry, we couldnt confirm that code."
      );
    }

    this.setState({
      emailConfirmationVisible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      emailConfirmationVisible: false,
    });
  };
}
export default withRouter(SignUp);
