//Standard React Import
import React, { Component } from "react";

//CSS Imports
import "antd/dist/antd.css";
import "../App.scss";
import styled from "styled-components";

//Ant Design Imports
import { notification, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

//React Router
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { tutorialReducer } from "../redux/reducers/tutorialReducer";
import { finishTutorial, restartTutorial } from "../redux/actions";

const mapStateToProps = state => {
  return {
    tutorialStatus: state.tutorialStatus
  };
};

const mapDispatchToProps = {
  finishTutorial,
  restartTutorial
};

//CSS Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  width: 725px;
  height: 350px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const Background = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2018/04/15/15/14/triangles-3321900_960_720.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-color: #fafafa;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Caption = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: -18px;
`;

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.state = {
      schoolCode: null
    };
  }

  render() {
    return (
      <Background>
        <Container style={{ marginTop: "11%" }}>
          <h1 style={{ fontWeight: "500", marginTop: "-24px" }}>
            Welcome to The Internship Initiative (TII)
          </h1>
          <Caption>
            Before we begin we'd like to learn a little more about you!
          </Caption>

          <h2
            style={{
              marginTop: "42px",
              fontWeight: "500",
              marginBottom: "-8px"
            }}
          >
            {" "}
            Enter School Code
          </h2>

          <Input
            onClick={this.props.finishTutorial}
            onPressEnter={this.handleEnter}
            style={{
              width: "200px",
              marginTop: "14px"
            }}
          />

          <Link
            to="/dashboard/my-internships"
            style={{ marginTop: "8px", fontWeight: "500" }}
            onClick={this.props.restartTutorial}
          >
            Continue independently
          </Link>
        </Container>

        {this.props.tutorialStatus ? <p>True</p> : <p>False</p>}
      </Background>
    );
  }

  handleEnter = event => {
    this.setState({ schoolCode: event.target.value });
    console.log(this.state.schoolCode);
    notification.open({
      message: "Error.",
      description: "Invalid School Code, please try again.",
      icon: <CloseOutlined style={{ color: "red" }} />
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudent);
