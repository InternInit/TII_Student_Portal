import React from 'react';
import styled from 'styled-components';
import { Input, Button, Form, notification } from 'antd';
import subtle_white_feathers from "../subtle_white_feathers.png";

import { Link } from 'react-router-dom';

//Ant D Icons
import {
    CloseOutlined,
    CheckOutlined
} from "@ant-design/icons";

import { Auth } from 'aws-amplify';

import { withRouter } from "react-router";


//CSS Styled Components
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#fafafa;
width:400px;
height:500px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

padding-bottom:24px;
`

const Background = styled.div`
background:radial-gradient(109.93% 109.93% at 50% 50%, #40A9FF 0%, rgba(133, 161, 200, 0.479167) 79.69%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
width:100%;
height:100%;
//background-image:url('https://storage.needpix.com/rsynced_images/blob-655237_1280.png');
background-position:center;
background-size:fill;
background-color:#fafafa;
position:fixed;
display:flex;
flex-direction:column;
align-items:center;
 `

const Label = styled.div`
font-size:16px;
font-weight:500;
text-align:left;
padding-bottom:8px;
`

const Banner = styled.div`
  background-color: #BAE7FF;
  padding: 18px;
  font-size: 32px;
  color: white;
  font-weight: normal;
  border-top-right-radius:8px;
  border-top-left-radius:8px;

`;

const ForgotPass = styled.a`
display:flex;
text-align:left;
font-weight:500;
width:80%;
margin-top:-19px;
`
const openSuccessfulNotification = (title, description) => {
    notification.open({
        message: title,
        description: description,
        icon: <CheckOutlined style={{ color: "green" }} />,
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

const openUnsuccessfulNotification = (title, description) => {
    notification.open({
        message: title,
        description: description,
        icon: <CloseOutlined style={{ color: "red" }} />,
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <Background >
                <Container style={{ marginTop: '5%' }}>
                    <Banner style={{ marginTop: '0px' }}>
                        The Internship Initiative (TII)
                    </Banner>
                    <div style={{ width: '70%', }}>
                        <Form onFinish={this.handleSubmit}>
                            <Label style={{ marginTop: '24px' }}>
                                Username
                            </Label>
                            <Form.Item name="username">
                                <Input />
                            </Form.Item>
                            <Label style={{ marginTop: '12px' }}>
                                Password
                            </Label>
                            <Form.Item name="password">
                                <Input.Password />
                            </Form.Item>
                            <ForgotPass>
                                Forgot Password
                                    </ForgotPass>

                            <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'center' }}>
                                <Button className="profile-button-style" type='primary' htmlType='submit'>
                                    Log In
                                    </Button>
                            </div>
                            <Label style={{ marginTop: '24%' }}>
                                Don't have an account?
                            <Link to="/signup"> Sign up here</Link>
                            </Label>
                        </Form>
                    </div>
                </Container>
            </Background >)
    }

    handleSubmit = async (values) => {
        let { username, password } = values
        try {
            const user = await Auth.signIn(username, password);
            this.props.newAuth();
            openSuccessfulNotification("Success", "You will be redirected to the dashboard in a bit.")

            this.props.history.push("/dashboard");

        } catch (error) {
            console.log('error signing in:', error);
            openUnsuccessfulNotification("Login Error", error.message)
        }

    }


}
export default withRouter(LogIn);
