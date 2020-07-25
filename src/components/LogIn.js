import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

import { Link } from 'react-router-dom';
import SignUp from './SignUp';

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
`

const Background = styled.div`
background-image:url('https://storage.needpix.com/rsynced_images/blob-655237_1280.png');
width:100%;
height:100%;
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
`
class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Background >
                <Container style={{ marginTop: '5%' }}>
                    <Banner style={{ marginTop: '0px' }}>
                        The Internship Initiative (TII)
                    </Banner>
                    <div style={{ width: '70%', }}>
                        <Label style={{ marginTop: '24px' }}>
                            Username
                    </Label>
                        <Input />
                        <Label style={{ marginTop: '12px' }}>
                            Password
                    </Label>
                        <Input.Password />
                        <ForgotPass>
                            Forgot Password
                        </ForgotPass>

                        <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'center' }}>
                            <Button className="profile-button-style" type='primary' >
                                Log In
                        </Button>
                        </div>
                        <Label style={{ marginTop: '24%' }}>
                            Don't have an account?
                            <Link > Sign up here</Link>
                        </Label>
                    </div>
                </Container>
            </Background >)
    }


}
export default LogIn;
