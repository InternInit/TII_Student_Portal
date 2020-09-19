import React from "react";
import styled from "styled-components";
import { Input, Button, Form, notification, message } from "antd";
import {
  Container,
  Background,
  Label,
  Banner,
} from "./StyledComponents/SignupLogin";

import { Link } from "react-router-dom";

//Ant D Icons
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import { Auth } from "aws-amplify";

import { withRouter } from "react-router";

//Styled Components
const ForgotPass = styled.a`
  display: flex;
  text-align: left;
  font-weight: 500;
  width: 80%;
  margin-top: -19px;
`;

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

  message.info();
};

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Background>
        <Container>
          <Banner style={{ marginTop: "0px" }}>
            The Internship Initiative (TII)
          </Banner>
          <div style={{ width: "70%" }}>
            <Form onFinish={this.handleSubmit}>
              <Label style={{ marginTop: "24px" }}>Username</Label>
              <Form.Item name="username">
                <Input />
              </Form.Item>
              <Label>Password</Label>
              <Form.Item name="password">
                <Input.Password />
              </Form.Item>
              <Button
                className="profile-button-style"
                type="primary"
                htmlType="submit"
                style={{
                  /*ORDER MATTERS DON'T SWITCH*/

                  margin: "auto",
                  marginTop: "30px",
                }}
              >
                Log In
              </Button>
              <Label style={{ marginTop: "10%" }}>
                Don't have an account?
                <Link to="/signup"> Sign up here</Link>
              </Label>
            </Form>
          </div>
        </Container>
      </Background>
    );
  }

  handleSubmit = async (values) => {
    let { username, password } = values;
    try {
      const user = await Auth.signIn(username, password);
      this.props.newAuth();
      openSuccessfulNotification(
        "Success",
        "You will be redirected to the dashboard in a bit."
      );

      this.props.history.push("/dashboard");
    } catch (error) {
      console.log("error signing in:", error);
      openUnsuccessfulNotification("Login Error", error.message);
    }
  };
}
export default withRouter(LogIn);
