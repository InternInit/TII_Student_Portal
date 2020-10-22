import React from "react";
import { Layout, Menu, notification } from "antd";

//Ant D Icons
import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  EditOutlined,
  ContainerOutlined,
  TeamOutlined,
  CompassOutlined,
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
      case "/apply/extracurriculars-and-classes":
        return Array.from("4");
      case "/apply/references":
        return Array.from("5");
      default:
        return Array.from("1");
    }
  };

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
      ExtracurricularsClassesButton: <CompassOutlined />,
      ReferencesButton: <TeamOutlined />,

      CheckMark: <CheckOutlined style={{ color: "green" }} />,

      //submission
      SubmitButton: "",
      CanSubmit: false,

      //Styles
      collapseStyle: {
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        color: "gray",
        backgroundColor: "ghostwhite",
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
      ExtracurricularsClassesButton,
      ReferencesButton,
      CheckMark,
    } = this.state;
    let { SubmitButton } = this.state;

    return (
      /**
       *
       * Sider Layout (AntD)
       *
       */
      <Sider //styling the sider
        style={{
          position: "fixed",
          overflow: "initial",
          width: "207px",
          margin: "10px",
          marginTop: "8.5%",
        }}
        //Collapsing
        collapsed={this.props.isCollapsed}
      >
        {/**
         *
         * Nav Panel Menu (AntD)
         *
         */}
        <Menu
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
          <Menu.Item
            key="1"
            onClick={() => {
              this.routeChange("/apply/internship-info");
            }}
          >
            {this.props.completionState[0] == 1 ? CheckMark : InternButton}
            <span> Internship Info</span>
          </Menu.Item>

          {/**
           *
           * Personal Information Tab
           *
           */}
          <Menu.Item
            key="2"
            onClick={() => {
              this.routeChange("/apply/personal");
            }}
          >
            {this.props.completionState[1] == 1 ? CheckMark : PersonalButton}

            <span> Personal</span>
          </Menu.Item>

          {/**
           *
           * Written Work Tab
           *
           */}
          <Menu.Item
            key="3"
            onClick={() => {
              this.routeChange("/apply/written-work");
            }}
          >
            {this.props.completionState[2] == 1 ? CheckMark : EssayButton}
            <Router>
              <span>Written Work</span>
            </Router>
          </Menu.Item>

          {/**
           *
           * Written Work Tab
           *
           */}
          <Menu.Item
            key="4"
            onClick={() => {
              this.routeChange("/apply/extracurriculars-and-classes");
            }}
          >
            {this.props.completionState[3] == 1
              ? CheckMark
              : ExtracurricularsClassesButton}
            <Router>
              <span>Activities/Classes</span>
            </Router>
          </Menu.Item>

          {/**
           *
           * References Tab
           *
           */}
          <Menu.Item
            key="5"
            onClick={() => {
              this.routeChange("/apply/references");
            }}
          >
            {this.props.completionState[4] == 1 ? CheckMark : ReferencesButton}
            <Router>
              <span>References</span>
            </Router>
          </Menu.Item>

          {/**
           *
           * Submit Button Menu Item
           *
           */}
          <Menu.Item
            className="third-step"
            style={{
              marginTop: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
            key="6"
            onClick={this.handleSubmit} //checks other states before allowing submit
          >
            {SubmitButton}
            <span> Submit</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }

  /**
   *
   * Handles submission of all application forms
   *
   */
  handleSubmit = () => {
    let status = this.props.completionState;

    if (_.isEqual(status, [1, 1, 1, 1, 1])) {
      // checks to see if all forms are completed
      //this.setState({ CanSubmit: true }); //sets canSubmit to true
      notification.open({
        //notification
        message: "Success.",
        description: "Your results have been submitted",
        icon: <CheckOutlined style={{ color: "green" }} />,
      });
      this.props.onSubmit({}, -1);
      this.routeChange("/submission-success");
    } else {
      notification.open({
        message: "Failed.",
        description: "You have to fill all necessary forms.",
        icon: <CloseOutlined style={{ color: "red" }} />,
      });

      this.goToUnfinishedPage();
    }
  };

  goToUnfinishedPage = () => {
    let status = this.props.completionState;

    let boolStatus = status.map((item) => item < 1);
    let routeIndex = boolStatus.indexOf(true);

    switch (routeIndex) {
      case 0:
        this.routeChange("/apply/internship-info#validate");
        break;
      case 1:
        this.routeChange("/apply/personal#validate");
        break;
      case 2:
        this.routeChange("/apply/written-work#validate");
        break;
      case 3:
        this.routeChange("/apply/references#validate");
        break;
      default:
        break;
    }
  };

  /**
   *
   * Route Change function (React Routing)
   *
   */
  routeChange = (path) => {
    if (path === "/apply/internship-info") {
      this.props.clickOne();
    } else if (path === "/apply/personal") {
      this.props.clickTwo();
    } else if (path === "/apply/written-work") {
      this.props.clickThree();
    } else if (path === "/apply/extracurriculars-and-classes") {
      this.props.clickFour();
    } else if (path === "/apply/references") {
      this.props.clickFive();
    }
    this.props.history.push(path);
  };
}
export default withRouter(TiiNav);
