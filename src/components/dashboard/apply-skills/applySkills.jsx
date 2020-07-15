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
