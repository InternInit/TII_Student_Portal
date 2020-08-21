import React from "react";
import styled from "styled-components";
import { Input, Button, Form, Popover, notification, Modal } from "antd";

//Ant D Icons
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import EmailConfirmation from "./EmailConfirmation.jsx";

import { Auth } from "aws-amplify";

import { withRouter } from "react-router";

//CSS Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  width: 400px;
  height: auto;
  padding-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding-bottom: 24px;
`;

const Background = styled.div`
  background: radial-gradient(
      109.93% 109.93% at 50% 50%,
      #40a9ff 0%,
      rgba(133, 161, 200, 0.479167) 79.69%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffffff;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: fill;
  background-color: #fafafa;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding-bottom: 8px;
`;

const Banner = styled.div`
  background-color: #bae7ff;
  padding: 18px;
  font-size: 32px;
  color: white;
  font-weight: normal;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

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
              <Label style={{ marginTop: "-8px" }}>Password</Label>
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
              <Label style={{ marginTop: "-8px" }}>Confirm Password</Label>
              <Form.Item
                {...formItemProps.confirmPassword}
                name="confirm-password"
              >
                <Input.Password />
              </Form.Item>
              <Label style={{ marginTop: "-8px" }}>Display Name</Label>
              <Form.Item {...formItemProps.name} name="name">
                <Input />
              </Form.Item>
              <Label style={{ marginTop: "-8px" }}>E-Mail</Label>
              <Form.Item {...formItemProps.email} name="email">
                <Input />
              </Form.Item>

              <div
                style={{
                  marginTop: " 26px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  className="profile-button-style"
                  type="primary"
                  htmlType="submit"
                >
                  Sign Up
                </Button>
              </div>
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
