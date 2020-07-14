//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../../App.css";
import "../dashboard.css";
import GettingStarted from "./GettingStarted.jpg";

import { Card } from "antd";

import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";

class ApplySkills extends Component {
  render() {
    return (
      <div>
        <h1 className="module-name">Get Started</h1>
        <Link to="#">
          <Card
            style={{ width: "100%", borderRadius: "15px", border: "none" }}
            cover={
              <img
                id="getting-started-card"
                className="apply-skills-big-card"
                alt="Document and folder"
                src={GettingStarted}
              />
            }
            hoverable
          >
            <Card.Meta></Card.Meta>
            <h1 className="apply-skills-big-card-title">
              Why do I need an internship?
            </h1>
            <p className="apply-skills-big-card-content">
              Curious about why you would need an internship? Check out our
              comprehensive overview about the benefits of high school
              internships and how The Internship Initiative can help you get
              one.
            </p>
          </Card>
        </Link>
      </div>
    );
  }
}

export default withRouter(ApplySkills);
