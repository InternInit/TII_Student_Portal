import React, { Component } from "react";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const MenuItemStyle = {
  width: "30%",
  fontSize: 24,
  fontFamily: "Lato",
  fontWeight: "bold",
  textAlign: "center"
};

class DashboardNavBar extends Component {


  /**
   *
   * Displaying Current Page
   *
   */
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
          onClick={this.handleClick}
          defaultSelectedKeys={[this.getCurrentKey()]}
          style={{ backgroundColor: "#F5F5F5" }}
          mode="horizontal"
        >
          {/**
           *
           * Link to My Internships Page
           *
           */}

          <Menu.Item style={MenuItemStyle} key="my-internships">
            <Link to="/dashboard/my-internships">My Internships</Link>
          </Menu.Item>

          {/**
           *
           * Link to Company Search Page
           *
           */}

          <Menu.Item style={MenuItemStyle} key="add-companies">
            {window.scrollTo(0, 0)}
            <Link to="/dashboard/add-companies">Add Companies</Link>
          </Menu.Item>

          {/**
           *
           * Link to Apply Skills Page
           *
           */}

          <Menu.Item style={MenuItemStyle} key="apply-skills">
            <Link to="/dashboard/apply-skills">Apply Skills</Link>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withRouter(DashboardNavBar);
