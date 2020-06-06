import React from "react";
import { Layout, Menu, notification } from "antd";

import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  EditOutlined,
  ContainerOutlined,
  TeamOutlined,
} from "@ant-design/icons";

//React Routing
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class TiiNav extends React.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
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
      SubmitButton: "",
      CanSubmit: false,



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
    const { Sider } = Layout;
    let {
      InternButton,
      PersonalButton,
      EssayButton,
      ReferencesButton,
    } = this.state;
    let { SubmitButton } = this.state;
    return (
      <Sider //styling the sider
        style={{
          position: "fixed",
          overflow: "initial",
          width: "207px",

          margin: "10px",
          marginTop: "5%"
        }}
      >


        <Menu //Navigation Panel
          theme="light"
          mode="inline"
          defaultSelectedKeys={this.props.highlightKey}
          selectedKeys={this.props.highlightKey}
        >
          <Menu.Item key="1" onClick={() => { this.routeChange('/Internship-Info') }}>
            {InternButton}
            <span>Internship Info</span>
          </Menu.Item>

          <Menu.Item key="2" onClick={() => { this.routeChange('/Personal') }}>
            {PersonalButton}

            <span>Personal</span>

          </Menu.Item>

          <Menu.Item key="3" onClick={() => { this.routeChange('/Written-Work') }}>
            {EssayButton}
            <Router>
              <Link to='/Written-Work'>
                <span>Written Work</span>
              </Link>
            </Router>
          </Menu.Item>

          <Menu.Item key="4" onClick={() => { this.routeChange('/References') }}>
            {ReferencesButton}
            <Router>
              <Link to='/References'>
                <span>References</span>
              </Link>
            </Router>
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
            {SubmitButton}
            <span>Submit</span>
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



  routeChange = (path) => {
    console.log(path)
    if (path === '/Internship-Info') {
      this.props.clickOne()
    }
    else if (path === '/Personal') {
      this.props.clickTwo()
    }
    else if (path === '/Written-Work') {
      this.props.clickThree()
    }
    else if (path === '/References') {
      this.props.clickFour()
    }
    this.props.history.push(path);
  }

}
export default withRouter(TiiNav);
