//Standard React Import
import React, { Component } from "react";

//CSS Imports
import "antd/dist/antd.css";
import "../App.css";

//Ant Design Imports
import { Menu } from "antd";

//Logo Import
import Logo from "../TII-logo.png";

class Navbar extends Component {
  //State saved on Apply button
  state = {
    current: "apply"
  };

  //Click Handler
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="logo">
          <img className="TII-logo" alt="Tii-logo" src={Logo} />
        </Menu.Item>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="how-to-apply">How to Apply</Menu.Item>
        <Menu.Item key="apply">Apply</Menu.Item>
        <Menu.Item key="submit">Submit</Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
