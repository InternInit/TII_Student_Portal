import React, { useState } from "react";
import styled from "styled-components";

import {
  Button,
  Modal,
  Input,
  notification,
  message,
  Upload,
  Avatar,
  Form,
  Popover,
} from "antd";

import { CloseOutlined, UserOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import {
  updateUserName,
  updateDisplayName,
  updateAvatar,
  updateEmail,
  updateVersion,
} from "../redux/actions";

import { Auth } from "aws-amplify";

import '../App.css'
import './dashboard/dashboard.css'


const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 3%;
  width: 70%;
`;

const Heading = styled.div`
   font-weight: bold;
  display: flex;
  justify-content: align-left;
  color: #595959;
`;

const ProfileBox = styled.div`
  background-color: #f5f5f5;
  width: 70%;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-top: 40px;
  padding-bottom: 36px;
`;

const UserInfo = styled.div`
  display: flex;
  text-align: left;
  flex-direction: row;
  align-items: center;
   font-weight: 500;
  color: #262626;
  width: 80%;
  margin-top: 28px;
`;

const Info = styled.div`
   font-weight: 500;
  color: #595959;
  margin-left: 12px;
`;

const ChangeInfo = styled.a`
  display: flex;
  text-align: left;
  font-weight: 500;
  width: 80%;
`;

const Header = styled.div`
   font-weight: 500;
  color: #595959;
  margin-top: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const passwordValidator = require("password-validator");

const schema = new passwordValidator();

schema.is().min(8).has().uppercase().has().lowercase().has().digits();

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = {
  updateUserName,
  updateDisplayName,
  updateAvatar,
  updateEmail,
  updateVersion,
};

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      displayname: "Kevin Tucker",
      password: "passwordholder",
      email: "21lub@nsboroschools.net",
      schoolCode: "12345",

      changeName: "Kevin Tucker",
      changePassword: "passwordholder",
      changeEmail: "21lub@nsboroschools.net",
      changeCode: "2345",

      currentMValue: "",

      modalTitle: "",
      visible: false,
      confirmLoading: false,
      passwordVisible: false,
      loading: false,
    };
  }

  formRef = React.createRef();

  render() {
    let {
      password,
      schoolCode,

      currentMValue,

      modalTitle,
      visible,
      confirmLoading,
      passwordVisible,
    } = this.state;

    let username = this.props.userInfo.username;
    let displayname = this.props.userInfo.displayName;
    let email = this.props.userInfo.email;
    let id = this.props.id;

    let displayPassword = password.replace(/./g, "*");

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
      <div
        style={{
          display: "flex",
          padding: "30px",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          minHeight: "100vh",
          minWidth: "650px",
        }}
      >
        <ModuleContainer>
          <Heading style={{ marginLeft: "18px" }} className="twentyEightFont">Profile Details</Heading>

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
            <Row style={{ alignSelf: "flex-start", display: "flex" }}>
              <Avatar
                size={54}
                icon={<UserOutlined />}
                src={this.props.userInfo.avatar}
                style={{ marginLeft: "24px", marginTop: "24px" }}
              />
              <Header className="twentyEightFont"
                style={{
                  marginLeft: "15px",
                  marginTop: "24px",
                  padding: "0px",
                }}
                className='thirtySixFont'
              >
                {username}
              </Header>
            </Row>

            {/**
             *
             * Change Profile Picture
             *
             */}
            <h2 style={{ fontWeight: "500" }}>Change Profile Picture</h2>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "60%",
              }}
            >
              {/**
               *
               * Buttons to add picture/remove current
               *
               */}
              <Upload
                listType="text"
                customRequest={this.customUploadRequest}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
                showUploadList={false}
                accept=".jpg, .jpeg, image/jpeg, .png, image/png"
              >
                <Button type="primary" className="profile-button-style">
                  Change Profile Picture
                </Button>
              </Upload>
              <Button
                className="profile-button-style"
                onClick={this.customRemoveRequest}
              >
                Remove Current
              </Button>
            </Row>
          </ProfileBox>

          {/**
           *
           * User Information
           *
           */}
          <UserInfo style={{ marginTop: "36px" }} className="eighteenFont">
            Display Name:  <Info className="eighteenFont">{displayname} </Info>
          </UserInfo>
          <ChangeInfo onClick={() => this.showModal("Display Name")}>
            Change display name
          </ChangeInfo>

          <UserInfo className="eighteenFont">
            Password:  <Info className="eighteenFont">{displayPassword}</Info>
          </UserInfo>
          <ChangeInfo onClick={() => this.showModal("Password")}>
            Change password
          </ChangeInfo>

          <UserInfo className="eighteenFont">
            E-mail:  <Info className="eighteenFont">{email}</Info>
          </UserInfo>
          <ChangeInfo onClick={() => this.showModal("E-Mail")}>
            Change e-mail
          </ChangeInfo>

          <UserInfo className="eighteenFont">
            School Code:  <Info className="eighteenFont">{schoolCode}</Info>
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
            onOk={() => this.handleOk(modalTitle)}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <Form ref={this.formRef}>
              <Form.Item
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your old password",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      let errors = schema.validate(value, { list: true });

                      function getValidationMessage(errors) {
                        for (let i = 0; i < errors.length; i++) {
                          if (errors[i] === "min") {
                            return "Password length should be at least 8 characters";
                          }
                        }
                      }

                      if (typeof getValidationMessage(errors) == "undefined") {
                        return Promise.resolve();
                      }

                      return Promise.reject(getValidationMessage(errors));
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Enter Old Password"
                  style={{ marginTop: "12px" }}
                />
              </Form.Item>
              <Popover
                placement="right"
                title={title}
                content={passwordPolicyContent}
                trigger="focus"
              >
                <Form.Item
                  name="newPassword"
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
                  <Input.Password
                    placeholder="Enter New Password"
                    style={{ marginTop: "14px" }}
                  />
                </Form.Item>
              </Popover>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm New password"
                  style={{ marginTop: "12px" }}
                />
              </Form.Item>
            </Form>
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
            <Input
              placeholder={"Enter New " + modalTitle}
              allowClear="true"
              value={currentMValue}
              onChange={(value) => this.handleEnter(value)}
              onSearch={(value) => this.handleEnter(value)}
            />
          </Modal>

          {/**
           *
           * Save and Cancel button
           *
           */}
          <Row
            style={{
              alignSelf: "flex-end",
              justifyContent: "space-evenly",
              width: "50%",
              marginTop: "24px",
            }}
          ></Row>
        </ModuleContainer>
      </div>
    );
  }

  updateAttributes = async (attrName, attrValue) => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        let attrObj = {};
        attrObj[attrName] = attrValue;
        return Auth.updateUserAttributes(user, attrObj);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  changePassword = async (oldPwd, newPwd) => {
    let errored = false;
  };

  /**
   *
   * Displays Modal
   *
   */
  showModal = (info) => {
    let { schoolCode } = this.state;
    let username = this.props.userInfo.username;
    let displayname = this.props.userInfo.displayName;
    let email = this.props.userInfo.email;

    switch (info) {
      case "Display Name":
        this.setState({
          currentMValue: displayname,
          visible: true,
          modalTitle: info,
        });
        break;
      case "Password":
        this.setState({
          passwordVisible: true,
          modalTitle: info,
        });
        break;
      case "E-Mail":
        this.setState({
          currentMValue: email,
          visible: true,
          modalTitle: info,
        });
        break;
      case "School Code":
        this.setState({
          currentMValue: schoolCode,
          visible: true,
          modalTitle: info,
        });
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
    let { changeName, changeCode, changeEmail, changePassword } = this.state;
    this.setState({ confirmLoading: true });
    setTimeout(() => {
      if (
        changeName === "" ||
        changeCode === "" ||
        changeEmail === "" ||
        changePassword === ""
      ) {
        notification.open({
          message: "Error.",
          description: "Please enter new " + modalTitle,
          icon: <CloseOutlined style={{ color: "red" }} />,
        });
        this.setState({ confirmLoading: false });
      } else {
        switch (modalTitle) {
          case "Display Name":
            this.setState({
              visible: false,
              confirmLoading: false,
            });
            this.updateAttributes("name", changeName);
            this.props.updateDisplayName(changeName);
            break;
          case "E-Mail":
            this.setState({
              email: changeEmail,
              visible: false,
              confirmLoading: false,
            });
            this.updateAttributes("email", changeEmail);
            this.props.updateEmail(changeEmail);
            break;
          case "School Code":
            this.setState({
              schoolCode: changeCode,
              visible: false,
              confirmLoading: false,
            });
            break;
          case "Password":
            this.formRef.current
              .validateFields()
              .then((values) => {
                Auth.currentAuthenticatedUser()
                  .then((user) => {
                    return Auth.changePassword(
                      user,
                      values.oldPassword,
                      values.newPassword
                    );
                    //throw "Fake Auth Error";
                  })
                  .then((data) => {
                    console.log(data);
                    this.setState({
                      password: changePassword,
                      passwordVisible: false,
                      confirmLoading: false,
                    });
                    message.success("Success! Your password has been changed");
                  })
                  .catch((err) => {
                    console.log(err);
                    message.error(err.message);
                  });
              })
              .catch((error) => {
                this.setState({ confirmLoading: false });
                console.log(error);
                message.error(
                  "Ensure your new password meets all specifications"
                );
              });
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
      changeCode: schoolCode,
      changePassword: password,
      visible: false,
      passwordVisible: false,
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
      case "Display Name":
        this.setState({
          changeName: event.target.value,
          currentMValue: event.target.value,
        });
        break;
      case "Password":
        this.setState({
          changePassword: event.target.value,
          currentMValue: event.target.value,
        });
        break;
      case "E-Mail":
        this.setState({
          changeEmail: event.target.value,
          currentMValue: event.target.value,
        });
        break;
      case "School Code":
        this.setState({
          changeCode: event.target.value,
          currentMValue: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  /**
   *
   * Profile Picture Uploading
   *
   */

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.setState({ loading: false });
    }
  };

  customRemoveRequest = () => {
    setTimeout(() => {
      let id = this.props.userInfo.id;

      fetch("/api/remove_user_profile_picture", {
        headers: {
          Subject: id,
        },
      })
        .then((response) => { })
        .then((data) => { });
    }, 100);
  };

  customUploadRequest = ({ onSuccess, onError, file }) => {
    setTimeout(() => {
      onSuccess(file);
      const fd = new FormData();
      fd.append("file", file);

      let id = this.props.userInfo.id;

      fetch("/api/upload_user_profile_picture", {
        method: "POST",
        headers: {
          Subject: id,
        },
        body: fd,
      })
        .then((response) => { })
        .then((data) => { });
    }, 100);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
