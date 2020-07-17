//Standard React Import
import React, { Component } from "react";

//CSS Imports
import "antd/dist/antd.css";
import "../App.css";

//Ant Design Imports
import { Menu } from "antd";
import { Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

//Logo Import
import Logo from "../TII-logo.png";

//React Router
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

//==========================================================
//
//            Styles and AntDesign Declarations
//
//==========================================================
const { SubMenu } = Menu;
const MenuAvatar =
  "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg";
const menuStyle = {
  textAlign: "left",
  marginLeft: "60px"
};

const menuItemStyle = {
  marginLeft: "20px",
  marginRight: "20px"
};

const avatarStyle = {
  float: "right",
  marginRight: "60px"
};

//==========================================================
//
//                      Navbar Class
//
//==========================================================
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.state = {
      current: this.getCurrentKey()
    };
  }

  getCurrentKey = () => {
    if (window.location.pathname.includes("apply/")) {
      return "apply";
    }
    if (
      window.location.pathname.includes("dashboard/") ||
      window.location.pathname === "/"
    ) {
      return "dashboard";
    }
    let defaultKey = window.location.pathname;
    let newDefaultKey = defaultKey.replace("/", "");
    return newDefaultKey;
  };

  //Click Handler
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  routeChange = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <Menu
        className="main-navbar"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={menuStyle}
      >
        {/*Moved the logo to a Fragment instead of a menu item to prevent
          random clicking until the dashboard is implemented in the next
          version*/}
        <React.Fragment>
          <img className="TII-logo" alt="Tii-logo" src={Logo} />
        </React.Fragment>
        <Menu.Item key="dashboard" style={menuItemStyle}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="how-to-apply"
          onClick={() => {
            this.routeChange("/how-to-apply");
          }}
          style={menuItemStyle}
        >
          How to Apply
        </Menu.Item>
        <Menu.Item key="apply" style={menuItemStyle}>
          <Link to="/apply/internship-info">Apply</Link>
        </Menu.Item>

        <SubMenu
          key="navbar-avatar"
          title={<Avatar className="navbar-avatar-icon" src={MenuAvatar} />}
          style={avatarStyle}
        >
          <Menu.Item key="edit-profile">
            <UserOutlined /> Edit Profile
          </Menu.Item>
          <Menu.Item
            key="logout"
            onClick={() => {
              this.props.logout();
            }}
          >
            <LogoutOutlined /> Logout
          </Menu.Item>
        </SubMenu>

        {/*
          Special submission route for choosing schools to be implemented
          in the next version.

          <Menu.Item key="submit">Submit</Menu.Item>
          */}
      </Menu>
    );
  }
}

export default withRouter(Navbar);
