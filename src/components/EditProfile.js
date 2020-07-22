import React, { } from "react";
import styled from "styled-components";
import { Button, Modal } from 'antd';
import { withRouter } from "react-router";

const ModuleContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
  background: white;
  border-radius: 10px;
  padding: 3%;
  width:70%;

`;


const Heading = styled.div`
font-size:28px;
font-weight:bold;
display:flex;
justify-content:align-left;
color:#595959;

`;


const ProfileBox = styled.div`
background-color:#f5f5f5;
width:70%;
flex-direction:column;
align-items:center;
display:flex;
margin-top:40px;
padding-bottom:36px;
`

const Image = styled.img`
width:54px;
height:54px;
background-color:blue;
border-radius:27px;
margin-left:24px;
margin-top:24px;
`

const UserInfo = styled.div`
display:flex;
text-align:left;
flex-direction:row;
align-items:center;
font-size:18px;
font-weight:500;
color:#262626;
width:80%;
margin-top:28px;
`

const Info = styled.div`
font-size:18px;
font-weight:500;
color:#595959;
margin-left:12px;
`

const ChangeInfo = styled.a`
display:flex;
text-align:left;
font-weight:500;
width:80%;
`


const Header = styled.div`
font-size:28px;
font-weight:500;
color:#595959;
margin-top:50px;
`


const Row = styled.div`
 display:flex;
 flex-direction:row;
 `


class EditProfile extends React.Component {
    constructor(props) {
        super(props);


        this.handleClick = this.handleClick.bind(this);
        this.showModal = this.showModal.bind(this);


        this.state = {
            displayname: 'Kevin Tucker',
            password: 'kevinpassword',
            email: '21lub@nsboroschools.net',
            phoneNumber: '774 415 4004',
            schoolCode: '12345',


            modalTitle: '',
            visible: false,
            confirmLoading: false,
        };

    }

    render() {
        let {
            displayname,
            password,
            email,
            phoneNumber,
            schoolCode,

            modalTitle,
            visible,
            confirmLoading,
        } = this.state;




        let displayPassword = password.replace(/./g, '*');

        return (
            <div
                style={{
                    display: "flex",
                    padding: "30px",
                    justifyContent: "center",
                    backgroundColor: "#F5F5F5",
                    minHeight: "100vh",
                }}
            >

                <ModuleContainer>
                    <Heading style={{ marginLeft: '18px' }}>Profile Details</Heading>



                    <ProfileBox>
                        <Row style={{ alignSelf: 'flex-start', display: 'flex' }}>
                            <Image src="" alt="Logo" />
                            <Header style={{
                                fontSize: '36px',
                                marginLeft: '15px',
                                marginTop: '24px',
                                padding: '0px'
                            }}>{displayname}</Header>
                        </Row>

                        <h2 style={{ fontWeight: '500' }}>
                            Change Profile Picture
                        </h2>
                        <Row style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '65%'
                        }}>
                            <Button type='primary' className='profile-button-style'>
                                Upload Picture
                            </Button>
                            <Button className='profile-button-style'>
                                Remove Current
                            </Button>
                        </Row>
                    </ProfileBox>


                    <UserInfo style={{ marginTop: '36px' }}>
                        Display Name: <Info>{displayname} </Info>
                    </UserInfo>
                    <ChangeInfo onClick={this.showModal}>
                        Change display name
                    </ChangeInfo>

                    <UserInfo>
                        Password: <Info>{displayPassword}</Info>
                    </UserInfo>
                    <ChangeInfo>
                        Change password
                    </ChangeInfo>

                    <UserInfo>
                        E-mail: <Info>{email}</Info>
                    </UserInfo>
                    <ChangeInfo>
                        Change e-mail
                    </ChangeInfo>

                    <UserInfo>
                        Phone Number: <Info>{phoneNumber}</Info>
                    </UserInfo>
                    <ChangeInfo>
                        Change phone number
                    </ChangeInfo>

                    <UserInfo>
                        School Code: <Info>{schoolCode}</Info>
                    </UserInfo>
                    <ChangeInfo>
                        Change School Code
                    </ChangeInfo>


                    <Modal
                        title={modalTitle}
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >


                    </Modal>










                    <Row style={{
                        alignSelf: 'flex-end',
                        justifyContent: 'space-between',
                        width: '45%',
                        marginTop: '23px'
                    }}>
                        <Button className='profile-button-style'>
                            Cancel
                        </Button>
                        <Button className='profile-button-style' type='primary'>
                            Save
                        </Button>
                    </Row>

                </ModuleContainer>
            </div >
        );
    }

    handleClick = () => {
        this.showModal();
    }




    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };




}
export default EditProfile;