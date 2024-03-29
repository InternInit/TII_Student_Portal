//React Imports
import React from "react";
import "../../../App.scss";
import "../dashboard.scss";

import { Card } from "antd";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function BigCard(props) {
  return (
    <Link to={props.link}>
      <Card
        style={{ width: "100%", borderRadius: "15px" }}
        cover={
          <img className="apply-skills-big-card-cover" src={props.cover} style={{ pointerEvents: 'none' }} alt="cover" />
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
