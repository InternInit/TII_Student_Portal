import React, { } from "react";
import styled from "styled-components";

import {
    Button,
    Modal,
    Input,
    notification,
    message,
    Upload,
} from 'antd';

import { withRouter } from "react-router";
import { CloseOutlined } from '@ant-design/icons'

import { connect } from "react-redux";

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
const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    };
};


class EditProfile extends React.Component {
    constructor(props) {
        super(props);


        this.showModal = this.showModal.bind(this);
        this.handleEnter = this.handleEnter.bind(this);


        this.state = {
            displayname: 'Kevin Tucker',
            password: 'kevinpassword',
            email: '21lub@nsboroschools.net',
            phoneNumber: '774 415 4004',
            schoolCode: '12345',

            changeName: 'Kevin Tucker',
            changePassword: 'kevinpassword',
            changeEmail: '21lub@nsboroschools.net',
            changeNumber: '774 415 4004',
            changeCode: '2345',

            currentMValue: '',

            modalTitle: '',
            visible: false,
            confirmLoading: false,
            passwordVisible: false,
            loading: false,

        };

    }

    render() {
        let {
            displayname,
            password,
            email,
            phoneNumber,
            schoolCode,

            currentMValue,

            modalTitle,
            visible,
            confirmLoading,
            passwordVisible,
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


                    {/**
                     *
                     * Box with Profile Picture
                     *
                     */}
                    <ProfileBox>
                        {/**
                     *
                     * Picture + Name
                     *
                     */}
                        <Row style={{ alignSelf: 'flex-start', display: 'flex' }}>
                            <Image src="" alt="Logo" />
                            <Header style={{
                                fontSize: '36px',
                                marginLeft: '15px',
                                marginTop: '24px',
                                padding: '0px'
                            }}>{displayname}</Header>
                        </Row>


                        {/**
                     *
                     * Change Profile Picture
                     *
                     */}
                        <h2 style={{ fontWeight: '500' }}>
                            Change Profile Picture
                        </h2>
                        <Row style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '65%'
                        }}>

                            {/**
                     *
                     * Buttons to add picture/remove current
                     *
                     */}
                            <Upload
                                listType="text"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                <Button type='primary' className='profile-button-style'>
                                    Change Profile Picture
                                </Button>

                            </Upload>
                            <Button className='profile-button-style'>
                                Remove Current
                            </Button>
                        </Row>
                    </ProfileBox>



                    {/**
                     *
                     * User Information
                     *
                     */}
                    <UserInfo style={{ marginTop: '36px' }}>
                        Display Name: <Info>{this.props.userInfo.username} </Info>
                    </UserInfo >
                    <ChangeInfo onClick={() => this.showModal("Display Name")}>
                        Change display name
                    </ChangeInfo>

                    <UserInfo>
                        Password: <Info>{displayPassword}</Info>
                    </UserInfo>
                    <ChangeInfo onClick={() => this.showModal("Password")}>
                        Change password
                    </ChangeInfo>

                    <UserInfo>
                        E-mail: <Info>{this.props.userInfo.email}</Info>
                    </UserInfo>
                    <ChangeInfo onClick={() => this.showModal("E-Mail")}>
                        Change e-mail
                    </ChangeInfo>

                    <UserInfo>
                        Phone Number: <Info>{phoneNumber}</Info>
                    </UserInfo>
                    <ChangeInfo onClick={() => this.showModal("Phone Number")}>
                        Change phone number
                    </ChangeInfo>

                    <UserInfo>
                        School Code: <Info>{schoolCode}</Info>
                    </UserInfo>
                    <ChangeInfo onClick={() => this.showModal("School Code")}>
                        Change School Code
                    </ChangeInfo>



                    {/**
                     *
                     * Password Change Modal
                     *
                     */}
                    <Modal
                        title="Change Password"
                        visible={passwordVisible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <Input placeholder='Enter Current password' type='password' />
                        <ChangeInfo style={{ marginLeft: '2px' }}>
                            Forgot Password
                        </ChangeInfo>
                        <Input placeholder='Enter New password' style={{ marginTop: '14px' }} />
                        <Input placeholder='Confirm New password' style={{ marginTop: '12px' }} />
                    </Modal>





                    {/**
                     *
                     * Change information Modal (excludes Password change)
                     *
                     */}
                    <Modal
                        title={"Change " + modalTitle}
                        visible={visible}
                        onOk={() => this.handleOk(modalTitle)}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <Input placeholder={"Enter New " + modalTitle}
                            allowClear='true'
                            value={currentMValue}
                            onChange={(value) => this.handleEnter(value)}
                            onSearch={(value) => this.handleEnter(value)} />

                    </Modal>





                    {/**
                     *
                     * Save and Cancel button
                     *
                     */}
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


    /**
     *
     * Displays Modal
     *
     */
    showModal = (info) => {
        let { displayname, email, schoolCode, phoneNumber, } = this.state;
        switch (info) {
            case 'Display Name':
                this.setState({
                    currentMValue: displayname,
                    visible: true,
                    modalTitle: info
                })
                break;
            case 'Password':
                this.setState({
                    passwordVisible: true,
                    modalTitle: info
                })
                break;
            case 'E-Mail':
                this.setState({
                    currentMValue: email,
                    visible: true,
                    modalTitle: info
                })
                break;
            case 'Phone Number':
                this.setState({
                    currentMValue: phoneNumber,
                    visible: true,
                    modalTitle: info
                })
                break;
            case 'School Code':
                this.setState({
                    currentMValue: schoolCode,
                    visible: true,
                    modalTitle: info
                })
                break;
            default:
                break;
        }
    };

    /**
     *
     *Handles "OK" button on modal
     *
     */
    handleOk = (modalTitle) => {
        let {
            changeName,
            changeCode,
            changeEmail,
            changeNumber,
            changePassword
        } = this.state;
        this.setState({ confirmLoading: true })
        setTimeout(() => {
            if (changeName === '' || changeCode === '' || changeEmail === '' || changeNumber === '' || changePassword === '') {
                notification.open({
                    message: "Error.",
                    description: "Please enter new " + modalTitle,
                    icon: <CloseOutlined style={{ color: "red" }} />
                })
                this.setState({ confirmLoading: false })
            }
            else {
                switch (modalTitle) {
                    case 'Display Name':
                        this.setState({
                            displayname: changeName,
                            visible: false,
                            confirmLoading: false
                        })
                        break;
                    case 'E-Mail':
                        this.setState({
                            email: changeEmail,
                            visible: false,
                            confirmLoading: false
                        })
                        break;
                    case 'Phone Number':
                        this.setState({
                            phoneNumber: changeNumber,
                            visible: false,
                            confirmLoading: false
                        })
                        break;
                    case 'School Code':
                        this.setState({
                            schoolCode: changeCode,
                            visible: false,
                            confirmLoading: false
                        })
                        break;
                    case 'Password':
                        this.setState({
                            password: changePassword,
                            passwordVisible: false,
                            confirmLoading: false
                        })
                        break;
                    default:
                        break;
                }
            }
        }, 1000);
    };

    /**
     *
     *Handles "Cancel" button on modal
     *
     */
    handleCancel = () => {
        let { displayname, email, phoneNumber, schoolCode, password } = this.state;
        this.setState({
            changeName: displayname,
            changeEmail: email,
            changeNumber: phoneNumber,
            changeCode: schoolCode,
            changePassword: password,
            visible: false,
            passwordVisible: false
        });
    };

    /**
     *
     *Handles changing profile information
     *
     */
    handleEnter = (event) => {
        let { modalTitle } = this.state;
        switch (modalTitle) {
            case 'Display Name':
                this.setState({
                    changeName: event.target.value,
                    currentMValue: event.target.value
                })
                break;
            case 'Password':
                this.setState({
                    changePassword: event.target.value,
                    currentMValue: event.target.value
                })
                break;
            case 'E-Mail':
                this.setState({
                    changeEmail: event.target.value,
                    currentMValue: event.target.value
                })
                break;
            case 'Phone Number':
                this.setState({
                    changeNumber: event.target.value,
                    currentMValue: event.target.value
                })
                break;
            case 'School Code':
                this.setState({
                    changeCode: event.target.value,
                    currentMValue: event.target.value
                })
                break;
            default:
                break;
        }
    }



    /**
     *
     * Profile Picture Uploading
     *
     */

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.setState({ loading: false });
        }
    };
}
export default connect(mapStateToProps)(EditProfile);

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
