import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

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
background:radial-gradient(109.93% 109.93% at 50% 50%, #40A9FF 0%, rgba(133, 161, 200, 0.479167) 79.69%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
  width:100%;
  height:100%;
  background-image:url('https://storage.needpix.com/rsynced_images/blob-655237_1280.png');
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
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Background >
                <Container style={{ marginTop: '5%' }}>
                    <Banner style={{ marginTop: '0px', width: '100%' }}>
                        Create a New Account
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
                        <Label style={{ marginTop: '12px' }}>
                            Display Name
                    </Label>
                        <Input />
                        <Label style={{ marginTop: '12px' }}>
                            E-Mail
                        </Label>
                        <Input />



                        <div style={{ marginTop: ' 32px', display: 'flex', justifyContent: 'flex-end' }}>
                            <Button className="profile-button-style" type='primary' >
                                Sign Up
                        </Button>
                        </div>

                    </div>
                </Container>
            </Background >)
    }


}
export default SignUp;
