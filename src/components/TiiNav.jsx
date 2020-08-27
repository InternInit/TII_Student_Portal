import React from "react";
import { Layout, Menu, notification } from "antd";

//Ant D Icons
import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  EditOutlined,
  ContainerOutlined,
  TeamOutlined
} from "@ant-design/icons";

//React Routing
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router";
import _ from "lodash";



class TiiNav extends React.Component {
  /**
   * 
   * Nav Panel selected tab
   * 
   */
  getInitialHighlight = () => {
    switch (this.props.location.pathname) {
      case "/apply/internship-info":
        return Array.from("1");
      case "/apply/personal":
        return Array.from("2");
      case "/apply/written-work":
        return Array.from("3");
      case "/apply/references":
        return Array.from("4");
      default:
        return Array.from("1");
    }
  };

  componentDidUpdate(prevProps, prevState) {
    this.handleUpdate();
  }

  componentDidMount() {
    this.getInitialHighlight();
  }

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
      },

      modFlag: false,



    };
  }

  render() {
    /**
     * 
     * Initializing states and constants
     * 
     */
    const { Sider } = Layout;
    let {
      InternButton,
      PersonalButton,
      EssayButton,
      ReferencesButton
    } = this.state;
    let { SubmitButton } = this.state;

    return (
      /**
           * 
           * Sider Layout (AntD)
           * 
           */
      < Sider //styling the sider
        style={{
          position: "fixed",
          overflow: "initial",
          width: "207px",
          margin: "10px",
          marginTop: "8.5%"
        }
        }
        //Collapsing
        collapsed={this.props.isCollapsed}
      >
        {/**
           * 
           * Nav Panel Menu (AntD)
           * 
           */}
        < Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={this.getInitialHighlight()}
          selectedKeys={this.getInitialHighlight()}
        >

          {/**
           * 
           * Internship Information Tab
           * 
           */}
          < Menu.Item
            key="1"
            onClick={() => {
              this.routeChange("/apply/internship-info");
            }}
          >
            {InternButton}
            < span > Internship Info</span >
          </Menu.Item >


          {/**
           * 
           * Personal Information Tab
           * 
           */}
          < Menu.Item
            key="2"
            onClick={() => {
              this.routeChange("/apply/personal");
            }}
          >
            {PersonalButton}

            < span > Personal</span >
          </Menu.Item >


          {/**
           * 
           * Written Work Tab
           * 
           */}
          < Menu.Item
            key="3"
            onClick={() => {
              this.routeChange("/apply/written-work");
            }}
          >
            {EssayButton}
            < Router >
              <span>Written Work</span>
            </Router >
          </Menu.Item >

          {/**
           * 
           * References Tab
           * 
           */}
          < Menu.Item
            key="4"
            onClick={() => {
              this.routeChange("/apply/references");
            }}
          >
            {ReferencesButton}
            < Router >
              <span>References</span>

            </Router >
          </Menu.Item >

          {/**
           * 
           * Submit Button Menu Item
           * 
           */}
          < Menu.Item
            className="third-step"
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
            < span > Submit</span >
          </Menu.Item >
        </Menu >
      </Sider >
    );
  }


  /**
  * 
  * Handles submission of all application forms
  * 
  */
  handleSubmit = () => {
    let status = this.props.completionState;

    if (_.isEqual(status, [1, 1, 1, 1])) {
      // checks to see if all forms are completed
      //this.setState({ CanSubmit: true }); //sets canSubmit to true
      notification.open({
        //notification
        message: "Success.",
        description: "Your results have been submitted",
        icon: <CheckOutlined style={{ color: "green" }} />
      });
      this.props.onSubmit({}, -1);
      this.routeChange("/submission-success");
    } else {
      notification.open({
        message: "Failed.",
        description: "You have to fill all necessary forms.",
        icon: <CloseOutlined style={{ color: "red" }} />
      });
    }
  };


  /**
  * 
  * Handle Update function
  * 
  */
  handleUpdate = e => {
    let completionState = this.props.completionState;

    for (var i = 0; i < completionState.length; i++) {
      switch (i) {
        case 0:
          if (completionState[i] === 1) {
            if (
              this.state.InternButton.type.render.displayName !==
              "CheckOutlined"
            ) {
              this.setState({
                InternButton: <CheckOutlined style={{ color: "green" }} />
              });
            }
          } else {
            if (
              this.state.InternButton.type.render.displayName !==
              "ContainerOutlined"
            ) {
              this.setState({ InternButton: <ContainerOutlined /> });
            }
          }
          break;
        case 1:
          if (completionState[i] === 1) {
            if (
              this.state.PersonalButton.type.render.displayName !==
              "CheckOutlined"
            ) {
              this.setState({
                PersonalButton: <CheckOutlined style={{ color: "green" }} />
              });
            }
          } else {
            if (
              this.state.PersonalButton.type.render.displayName !==
              "UserOutlined"
            ) {
              this.setState({ PersonalButton: <UserOutlined /> });
            }
          }
          break;
        case 2:
          if (completionState[i] === 1) {
            if (
              this.state.EssayButton.type.render.displayName !== "CheckOutlined"
            ) {
              this.setState({
                EssayButton: <CheckOutlined style={{ color: "green" }} />
              });
            }
          } else {
            if (
              this.state.EssayButton.type.render.displayName !== "EditOutlined"
            ) {
              this.setState({ EssayButton: <EditOutlined /> });
            }
          }
          break;
        case 3:
          if (completionState[i] === 1) {
            if (
              this.state.ReferencesButton.type.render.displayName !==
              "CheckOutlined"
            ) {
              this.setState({
                ReferencesButton: <CheckOutlined style={{ color: "green" }} />
              });
            }
          } else {
            if (
              this.state.ReferencesButton.type.render.displayName !==
              "TeamOutlined"
            ) {
              this.setState({ ReferencesButton: <TeamOutlined /> });
            }
          }
          break;
        default:
          break;

      }
    }
  };


  /**
   * 
   * Route Change function (React Routing)
   * 
   */
  routeChange = path => {
    if (path === "/apply/internship-info") {
      this.props.clickOne();
    } else if (path === "/apply/personal") {
      this.props.clickTwo();
    } else if (path === "/apply/written-work") {
      this.props.clickThree();
    } else if (path === "/apply/references") {
      this.props.clickFour();
    }
    this.props.history.push(path);
  };


}
export default withRouter(TiiNav);
