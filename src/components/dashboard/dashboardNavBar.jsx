import React, { Component } from "react";
import "../../App.scss";
import "./dashboard.scss";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const MenuItemStyle = {
  width: "33.3%",
  margin: "auto",
  fontFamily: "Lato",
  fontWeight: "bold",
  textAlign: "center",
};

class DashboardNavBar extends Component {
  /**
   *
   * Displaying Current Page
   *
   */

  componentDidMount() {
    console.log("Dashboard nav mounted");
  }

  getCurrentKey = () => {
    let defaultKey = this.props.location.pathname;
    if (
      defaultKey === "/dashboard" ||
      defaultKey.includes("my-internships") ||
      defaultKey === "/"
    ) {
      return "my-internships";
    } else if (defaultKey.includes("add-companies")) {
      return "add-companies";
    } else {
      return "apply-skills";
    }
  };

  render() {
    return (
      <React.Fragment>
        <Menu
          className="dashboard-nav"
          defaultSelectedKeys={this.getCurrentKey()}
          selectedKeys={this.getCurrentKey()}
          style={{ backgroundColor: "#EBEFF2" }}
          mode="horizontal"
        >
          {/**
           *
           * Link to My Internships Page
           *
           */}

          <Menu.Item
            style={MenuItemStyle}
            key="my-internships"
            className="twentyFourFont"
          >
            <NavLink to="/dashboard/my-internships">My Internships</NavLink>
          </Menu.Item>

          {/**
           *
           * Link to Company Search Page
           *
           */}
          <Menu.Item
            style={MenuItemStyle}
            className="twentyFourFont"
            key="add-companies"
          >
            <NavLink to="/dashboard/add-companies">Add Companies</NavLink>
          </Menu.Item>

          {/**
           *
           * Link to Apply Skills Page
           *
           */}

          <Menu.Item
            style={MenuItemStyle}
            key="apply-skills"
            className="twentyFourFont"
          >
            <NavLink to="/dashboard/apply-skills">Apply Skills</NavLink>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withRouter(DashboardNavBar);
