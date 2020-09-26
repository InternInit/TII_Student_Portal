//React Imports
import React from "react";
import "../../../App.scss";
import "../dashboard.scss";

import { Card, Col } from "antd";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function LittleCard(props) {
  return (
    <Col span={12}>
      <Link to={props.link}>
        <Card
          className="apply-skills-little-card"
          style={{
            width: "100%",
            minHeight: "375px",
            borderRadius: "15px",
            display: "inline-block"
          }}
          cover={
            <img
              className="apply-skills-little-card-cover"
              src={props.cover}
              style={{ pointerEvents: "none" }}
              alt="cover"
            />
          }
          hoverable
        >
          <h1 className="apply-skills-little-card-title">{props.title}</h1>
          <p className="apply-skills-little-card-time">{props.readTime}</p>
          <p className="apply-skills-little-card-content">
            {props.description}
          </p>
        </Card>
      </Link>
    </Col>
  );
}

export default withRouter(LittleCard);
