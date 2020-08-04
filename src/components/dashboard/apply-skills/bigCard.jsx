//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../../App.css";
import "../dashboard.css";
import GettingStarted from "./GettingStarted.jpg";

import { Card } from "antd";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function BigCard(props) {
  return (
    <Link to={props.link}>
      <Card
        style={{ width: "100%", borderRadius: "15px" }}
        cover={
          <img className="apply-skills-big-card-cover" src={props.cover} style={{ pointerEvents: 'none' }} />
        }
        hoverable
      >
        <h1 className="apply-skills-big-card-title">{props.title}</h1>
        <p className="apply-skills-big-card-time">5 Minutes</p>
        <p className="apply-skills-big-card-content">{props.description}</p>
      </Card>
    </Link>
  );
}

export default withRouter(BigCard);
