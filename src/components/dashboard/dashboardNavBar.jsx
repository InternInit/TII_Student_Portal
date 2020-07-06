import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Menu } from "antd";

const MenuItemStyle = {
  width: "33%",
  fontSize: 24,
  fontFamily: "Lato",
  fontWeight: "bold"
};

class DashboardNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu
          className="dashboard-nav"
          defaultSelectedKeys={["my-internships"]}
          style={{ backgroundColor: "#F5F5F5" }}
          mode="horizontal"
        >
          <Menu.Item style={MenuItemStyle} key="my-internships">
            My Internships
          </Menu.Item>
          <Menu.Item style={MenuItemStyle} key="add-companies">
            Add Companies
          </Menu.Item>
          <Menu.Item style={MenuItemStyle} key="apply-skills">
            Apply Skills
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default DashboardNavBar;
