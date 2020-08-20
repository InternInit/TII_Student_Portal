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
  font-size: 28px;
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
  font-size: 18px;
  font-weight: 500;
  color: #262626;
  width: 80%;
  margin-top: 28px;
`;

const Info = styled.div`
  font-size: 18px;
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
  font-size: 28px;
  font-weight: 500;
  color: #595959;
  margin-top: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
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
    return (
      <div
        style={{
          display: "flex",
          padding: "30px",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          minHeight: "100vh",
          minWidth: "850px",
        }}
      >
        <ModuleContainer>
          <Heading style={{ marginLeft: "18px" }}>Profile Details</Heading>

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
              <Header
                style={{
                  fontSize: "36px",
                  marginLeft: "15px",
                  marginTop: "24px",
                  padding: "0px",
                }}
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
          <UserInfo style={{ marginTop: "36px" }}>
            Display Name: <Info>{displayname} </Info>
          </UserInfo>
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
            E-mail: <Info>{email}</Info>
          </UserInfo>
          <ChangeInfo onClick={() => this.showModal("E-Mail")}>
            Change e-mail
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
            <Input.Password
              placeholder="Enter New password"
              style={{ marginTop: "14px" }}
            />
            <Input.Password
              placeholder="Confirm New password"
              style={{ marginTop: "12px" }}
            />
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
          >
            <Button className="profile-button-style">Cancel</Button>

            <Button
              className="profile-button-style"
              type="primary"
              style={{ marginLeft: "2vh" }}
            >
              Save
            </Button>
          </Row>
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
            this.setState({
              password: changePassword,
              passwordVisible: false,
              confirmLoading: false,
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
    console.log(this.state);
  };

  customRemoveRequest = () => {
    setTimeout(() => {
      let id = this.props.userInfo.id;

      fetch("/api/remove_user_profile_picture", {
        headers: {
          Subject: id,
        },
      })
        .then((response) => {})
        .then((data) => {});
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
        .then((response) => {})
        .then((data) => {});
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
