import React from "react";
import { Layout, Menu, notification } from "antd";

import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  EditOutlined,
  CaretDownOutlined,
  ContainerOutlined,
  TeamOutlined,
  SwapOutlined
} from "@ant-design/icons";

class TiiNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //states
      InternIComplete: false,
      PersonalComplete: false,
      EssayComplete: false,
      ReferencesComplete: false,

      //icons
      InternButton: <ContainerOutlined />,
      PersonalButton: <UserOutlined />,
      EssayButton: <EditOutlined />,
      ReferencesButton: <TeamOutlined />,

      //submission
      SubmitButton: "Submit",
      CanSubmit: false,

      //collapsing
      collapsed: false,

      //Styles
      collapseStyle: {
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        color: "gray",
        backgroundColor: "ghostwhite"
      }
    };
  }

  render() {
    const { Sider, Content } = Layout;
    let {
      InternButton,
      PersonalButton,
      EssayButton,
      ReferencesButton
    } = this.state;
    let { collapsed, SubmitButton } = this.state;

    return (
      <Sider //styling the sider
        collapsed={collapsed}
        style={{
          position: "fixed",
          overflow: "initial",
          width: "207px",
          margin: "10px",
          marginTop: "5%"
        }}
      >
        <div
          onClick={this.toggleCollapsed} //The collapsing bar (can be deleted)
          style={this.state.collapseStyle}
        >
          <SwapOutlined />
        </div>

        <Menu //Navigation Panel
          theme="light"
          mode="inline"
          defaultSelectedKeys={this.props.highlightKey}
        >
          <Menu.Item key="1" onClick={this.props.clickOne}>
            {InternButton} <span>Internship Info</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.props.clickTwo}>
            {PersonalButton} <span>Personal</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.props.clickThree}>
            {EssayButton} <span>Cover Letter</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.props.clickFour}>
            {ReferencesButton} <span>References</span>
          </Menu.Item>
          <Menu.Item
            style={{
              marginTop: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center"
            }}
            key="5"
            onClick={this.handleSubmit} //checks other states before allowing submit
          >
            {SubmitButton}{" "}
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }

  handleSubmit = e => {
    let {
      InternIComplete,
      EssayComplete,
      ReferencesComplete,
      PersonalComplete
    } = this.state;
    if (
      InternIComplete &&
      EssayComplete &&
      ReferencesComplete &&
      PersonalComplete
    ) {
      // checks to see if all forms are completed
      this.setState({ CanSubmit: true }); //sets canSubmit to true
      notification.open({
        //notification
        message: "Success.",
        description: "Your results have been submitted",
        icon: <CheckOutlined style={{ color: "green" }} />
      });
    } else {
      notification.open({
        message: "Failed.",
        description: "You have to fill all necessary forms.",
        icon: <CloseOutlined style={{ color: "red" }} />
      });
    }
  };

  handleClick = e => {
    //The handleClick function is purely for testing. When you click on the first button, it will set all states to "true"
    this.setState({
      InternIComplete: true,
      EssayComplete: true,
      ReferencesComplete: true,
      PersonalComplete: true
    });
    this.setState({
      InternButton: <CheckOutlined style={{ color: "green" }} />,
      EssayButton: <CheckOutlined style={{ color: "green" }} />,
      ReferencesButton: <CheckOutlined style={{ color: "green" }} />,
      PersonalButton: <CheckOutlined style={{ color: "green" }} />
    });
  };

  onCollapse = () => {
    //changing collapsed state
    let { collapsed } = this.state;
    this.setState({ collapsed });
  };

  toggleCollapsed = () => {
    //toggling collapsed
    this.setState({
      collapsed: !this.state.collapsed
    });

    if (!this.state.collapsed) {
      //toggling between "Submit" icon
      this.setState({ SubmitButton: <CaretDownOutlined /> });
    } else {
      this.setState({ SubmitButton: "Submit" });
    }
  };
}
export default TiiNav;
