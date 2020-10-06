//Standard React Import
import React, { Component } from "react";

//CSS Imports
import "antd/dist/antd.css";
import "../App.scss";

//Ant Design Imports
import { Menu } from "antd";
import { Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";

//Logo Import
import Logo from "../TII-logo.png";

//React Router
import { Link, useLocation } from "react-router-dom";
import { withRouter } from "react-router";

//==========================================================
//
//            Styles and AntDesign Declarations
//
//==========================================================
const { SubMenu } = Menu;

const menuStyle = {
  textAlign: "left",
  marginLeft: "60px",
};

const menuItemStyle = {
  marginLeft: "20px",
  marginRight: "20px",
  fontWeight: "500",
};

const avatarStyle = {
  float: "right",
  marginRight: "60px",
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
      current: this.getCurrentKey(),
      isMobile: false,
    };
  }

  getCurrentKey = () => {
    if (window.location.pathname.includes("apply/")) {
      return "apply";
    }
    if (
      window.location.pathname.includes("dashboard") ||
      window.location.pathname === "/"
    ) {
      return "dashboard";
    }
    if (window.location.pathname.includes("questions")) {
      return "FAQ";
    }
    let defaultKey = window.location.pathname;
    let newDefaultKey = defaultKey.replace("/", "");
    return newDefaultKey;
  };

  //Click Handler
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  routeChange = (path) => {
    this.props.history.push(path);
  };

  render() {
    let { isMobile } = this.state;

    if (isMobile || window.innerWidth <= 810) {
      return (
        <Menu
          className="main-navbar"
          onClick={this.handleClick}
          defaultSelectedKeys={[this.getCurrentKey()]}
          selectedKeys={[this.getCurrentKey]}
          mode="horizontal"
          style={menuStyle}
        >
          <SubMenu
            key="nav-bar"
            title={<AlignLeftOutlined />}
            style={{ fontWeight: "500" }}
          >
            {/*Moved the logo to a Fragment instead of a menu item to prevent
        random clicking until the dashboard is implemented in the next
        version*/}

            <Menu.Item key="dashboard" style={menuItemStyle}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="apply" style={menuItemStyle}>
              <Link to="/apply/internship-info">Apply</Link>
            </Menu.Item>

            <Menu.Item
              key="how-to-apply"
              className="first-step"
              onClick={() => {
                this.routeChange("/how-to-apply");
              }}
              style={menuItemStyle}
            >
              How to Apply
            </Menu.Item>
            <Menu.Item key="FAQ" style={menuItemStyle}>
              <Link to="/frequently-asked-questions">FAQ</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="navbar-avatar"
            title={
              <Avatar
                size={25}
                className="navbar-avatar-icon"
                src={this.props.userInfo.avatar}
                icon={<UserOutlined />}
              />
            }
            style={avatarStyle}
          >
            <Menu.Item
              key="edit-profile"
              onClick={() => {
                this.routeChange("/edit-profile");
              }}
            >
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

    return (
      <Menu
        className="main-navbar"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={menuStyle}
      >
        <React.Fragment>
          <Link to="/dashboard/my-internships">
            <img className="TII-logo" alt="Tii-logo" src={Logo} />
          </Link>
        </React.Fragment>
        <Menu.Item key="dashboard" style={menuItemStyle}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="apply" style={menuItemStyle}>
          <Link to="/apply/internship-info">Apply</Link>
        </Menu.Item>

        <Menu.Item
          key="how-to-apply"
          className="first-step"
          onClick={() => {
            this.routeChange("/how-to-apply");
          }}
          style={menuItemStyle}
        >
          How to Apply
        </Menu.Item>

        <Menu.Item key="FAQ" style={menuItemStyle}>
          <Link to="/frequently-asked-questions">FAQ</Link>
        </Menu.Item>

        <SubMenu
          key="navbar-avatar"
          title={
            <Avatar
              size={25}
              className="navbar-avatar-icon"
              src={this.props.userInfo.avatar}
              icon={<UserOutlined />}
            />
          }
          style={avatarStyle}
        >
          <Menu.Item
            key="edit-profile"
            onClick={() => {
              this.routeChange("/edit-profile");
            }}
          >
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

  resize = () => {
    let mobile = window.innerWidth <= 810;
    if (mobile !== this.state.isMobile) {
      this.setState({ isMobile: mobile });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
}

export default withRouter(Navbar);
