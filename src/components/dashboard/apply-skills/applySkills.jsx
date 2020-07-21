//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../../App.css";
import "../dashboard.css";
import GettingStarted from "./GettingStarted.jpg";
import BigCard from "./bigCard";

import { Card, Row, Col } from "antd";

import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";

const resumeSkills = [
  [
    "Choosing_Resume",
    "How to Choose Which Style Resume to Use",
    "5 minutes",
    "Find out which resume style works best for you."
  ],
  [
    "What_To_Include_On_Resume",
    "What You Should Include on Your Resume",
    "25 minutes",
    "How to decide what to include on your resume."
  ],
  [
    "Writing_Reverse_Chronological",
    "How to Write a Reverse Chronological Resume",
    "15 minutes",
    "If you’ve had prior job experiences, read on to learn how to create a reverse chronological resume."
  ],
  [
    "Writing_Functional_Resume",
    "How to Write a Functional Resume",
    "15 minutes",
    "If you don’t have any prior work experience, don’t fret. Read on to learn how to create a functional resume."
  ],
  [
    "Writing_Combination_Resume",
    "How to Write a Combination Resume",
    "15 minutes",
    "If you want to show your skills AND work experience, a combination resume may be for you. Learn how to create a combination resume."
  ],
  [
    "Reverse_Chron_Resume_Example",
    "An Example of a Reverse Chronological Resume",
    "15 minutes",
    "Take a look at what a reverse chronological resume could look like."
  ],
  [
    "Funct_Resume_Example",
    "An Example of a Functional Resume",
    "15 minutes",
    "Take a look at what a functional resume could look like."
  ],
  [
    "Comb_Resume_Example",
    "An Example of a Combination Resume",
    "15 minutes",
    "Take a look at what a combination resume could look like."
  ]
];
const interviewSkills = [
  [
    "What_to_Say_in_Interview",
    "What you Should Say in an Interview",
    "10 minutes",
    "Prepare yourself for a job interview by reviewing what you should (and shouldn’t) say."
  ],
  [
    "How_to_act_Interview",
    "How to Act in an Interview",
    "10 minutes",
    "There are many Do’s and Do NOT’s in job interviews. Learn more about the various facets of the interview process so you can land your internship."
  ],
  [
    "Before_After_Interview",
    "What to do Before and After an Interview",
    "7 minutes",
    "Give yourself an edge in the interview process by preparing before it begins and making yourself more memorable afterwards."
  ],
  [
    "Mock_Interview_Questions",
    "Potential Interview Questions",
    "10 minutes",
    "12 questions that you might be asked during an interview."
  ]
];
const writtenSkills = [
  [
    "Letter_of_Rec",
    "A Guide to Letters of Recommendations",
    "20 minutes",
    "What is a letter of recommendation, and how do you get one? These questions (among many others) will all be answered in this quick guide."
  ],
  [
    "Cover_Letter",
    "How to Write a Cover Letter",
    "10 minutes",
    "A quick tutorial explaining cover letters and how to write them."
  ],
  [
    "Extra_Info",
    "Additional Resources",
    "2 minutes",
    "Just in case we missed something, here are some outside resources we recommend to answer your questions."
  ]
];

class ApplySkills extends Component {
  render() {
    return (
      <div>
        <h1 className="module-name">Get Started</h1>
        <BigCard
          link="#"
          cover={GettingStarted}
          title="Why do I need an internship?"
          description="Curious about why you would need an internship? Check out our
        comprehensive overview about the benefits of high school
        internships and how The Internship Initiative can help you get
        one."
        />
        <Link to="#">
          <Card
            style={{ width: "100%", borderRadius: "15px", border: "none" }}
            cover={
              <img
                id="getting-started-card"
                className="apply-skills-big-card-cover"
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
        <h1 className="module-name">Build your resumé</h1>
        <Row>
          <Col></Col>
        </Row>
        <Row gutter={[32, 16]}>
          <Col span={12}>
            <Link to="#">
              <Card
                className="apply-skills-little-card"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "none",
                  display: "inline-block"
                }}
                cover={
                  <img
                    className="apply-skills-little-card-cover"
                    alt="Document and folder"
                    src={GettingStarted}
                  />
                }
                hoverable
              >
                <h1 className="apply-skills-little-card-title">
                  Why do I need an internship?
                </h1>
                <p className="apply-skills-little-card-content">
                  Curious about why you would need an internship? Check out our
                  comprehensive overview about the benefits of high school
                  internships and how The Internship Initiative can help you get
                  one.
                </p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="#">
              <Card
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "none",
                  display: "inline-block"
                }}
                cover={
                  <img
                    className="apply-skills-little-card-cover"
                    alt="Document and folder"
                    src={GettingStarted}
                  />
                }
                hoverable
              >
                <Card.Meta></Card.Meta>
                <h1 className="apply-skills-little-card-title">
                  Why do I need an internship?
                </h1>
                <p className="apply-skills-little-card-content">
                  Curious about why you would need an internship? Check out our
                  comprehensive overview about the benefits of high school
                  internships and how The Internship Initiative can help you get
                  one.
                </p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="#">
              <Card
                className="apply-skills-little-card"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "none",
                  display: "inline-block"
                }}
                cover={
                  <img
                    className="apply-skills-little-card-cover"
                    alt="Document and folder"
                    src={GettingStarted}
                  />
                }
                hoverable
              >
                <h1 className="apply-skills-little-card-title">
                  Why do I need an internship?
                </h1>
                <p className="apply-skills-little-card-content">
                  Curious about why you would need an internship? Check out our
                  comprehensive overview about the benefits of high school
                  internships and how The Internship Initiative can help you get
                  one.
                </p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="#">
              <Card
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "none",
                  display: "inline-block"
                }}
                cover={
                  <img
                    className="apply-skills-little-card-cover"
                    alt="Document and folder"
                    src={GettingStarted}
                  />
                }
                hoverable
              >
                <Card.Meta></Card.Meta>
                <h1 className="apply-skills-little-card-title">
                  Why do I need an internship?
                </h1>
                <p className="apply-skills-little-card-content">
                  Curious about why you would need an internship? Check out our
                  comprehensive overview about the benefits of high school
                  internships and how The Internship Initiative can help you get
                  one.
                </p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="#">
              <Card
                className="apply-skills-little-card"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "none",
                  display: "inline-block"
                }}
                cover={
                  <img
                    className="apply-skills-little-card-cover"
                    alt="Document and folder"
                    src={GettingStarted}
                  />
                }
                hoverable
              >
                <h1 className="apply-skills-little-card-title">
                  Why do I need an internship?
                </h1>
                <p className="apply-skills-little-card-content">
                  Curious about why you would need an internship? Check out our
                  comprehensive overview about the benefits of high school
                  internships and how The Internship Initiative can help you get
                  one.
                </p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="#">
              <Card
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "none",
                  display: "inline-block"
                }}
                cover={
                  <img
                    className="apply-skills-little-card-cover"
                    alt="Document and folder"
                    src={GettingStarted}
                  />
                }
                hoverable
              >
                <Card.Meta></Card.Meta>
                <h1 className="apply-skills-little-card-title">
                  Why do I need an internship?
                </h1>
                <p className="apply-skills-little-card-content">
                  Curious about why you would need an internship? Check out our
                  comprehensive overview about the benefits of high school
                  internships and how The Internship Initiative can help you get
                  one.
                </p>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(ApplySkills);
