//Standard React Import
import React, { Component } from "react";

//CSS Imports
import "antd/dist/antd.css";
import "../App.css";

//Ant Design Imports
import { Menu, Button } from "antd";
import { Avatar } from "antd";

//React Router
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

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

class NewStudent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to The Internship Initiative (TII)</h1>
        <p>Before we begin we'd like to learn a little more about you!</p>
        <button onClick={this.props.finishTutorial}>
          Use TII with a school
        </button>
        <Button onClick={this.props.restartTutorial}>
          Use TII independently
        </Button>
        {this.props.tutorialStatus ? <p>True</p> : <p>False</p>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudent);
