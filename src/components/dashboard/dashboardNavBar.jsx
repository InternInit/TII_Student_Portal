import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const MenuItemStyle = {
  width: "33%",
  fontSize: 24,
  fontFamily: "Lato",
  fontWeight: "bold"
};

class DashboardNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.getCurrentKey()
    };
  }

  getCurrentKey = () => {
    let defaultKey = window.location.pathname;
    console.log(defaultKey);
    let newDefaultKey = defaultKey.replace("/dashboard/", "");
    console.log(newDefaultKey);
    return newDefaultKey;
  };

  render() {
    return (
      <React.Fragment>
        <Menu
          className="dashboard-nav"
          onClick={this.handleClick}
          defaultSelectedKeys={[this.state.current]}
          style={{ backgroundColor: "#F5F5F5" }}
          mode="horizontal"
        >
          <Menu.Item style={MenuItemStyle} key="my-internships">
            <Link to="/dashboard/my-internships">My Internships</Link>
          </Menu.Item>
          <Menu.Item style={MenuItemStyle} key="add-companies">
            <Link to="/dashboard/add-companies">Add Companies</Link>
          </Menu.Item>
          <Menu.Item style={MenuItemStyle} key="apply-skills">
            <Link to="/dashboard/apply-skills">Apply Skills</Link>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withRouter(DashboardNavBar);
