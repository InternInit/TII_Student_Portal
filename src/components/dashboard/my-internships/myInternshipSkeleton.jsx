import React, { Component } from "react";
import styled from "styled-components";

import "../dashboard.scss";

import Checklist from "./checklist.jsx";
import { Skeleton, Space, Row, Col } from "antd";
import { withRouter } from "react-router";

/*

Container to hold all the progress bars

*/
const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3%;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
`;

const MyInternshipSkeleton = (props) => {
  return (
    <React.Fragment>
      {/**
       *
       * Application Progress
       *
       */}

      <h1 className="module-name">Application Progress</h1>
      <ModuleContainer>
        <React.Fragment>
          <div className="universal-left" style={{ marginBottom: "-1px" }}>
            <Skeleton.Input size="medium" active style={{ width: "25vw" }} />
          </div>
          <div className="universal-left" style={{ marginBottom: "-15px" }}>
            <Skeleton paragraph={false} title={{ width: "100%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "15px" }}>
            <Skeleton paragraph={false} title={{ width: "10%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "-1px" }}>
            <Skeleton.Input size="medium" active style={{ width: "25vw" }} />
          </div>
          <div className="universal-left" style={{ marginBottom: "-15px" }}>
            <Skeleton paragraph={false} title={{ width: "100%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "15px" }}>
            <Skeleton paragraph={false} title={{ width: "10%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "-1px" }}>
            <Skeleton.Input size="medium" active style={{ width: "25vw" }} />
          </div>
          <div className="universal-left" style={{ marginBottom: "-15px" }}>
            <Skeleton paragraph={false} title={{ width: "100%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "15px" }}>
            <Skeleton paragraph={false} title={{ width: "10%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "-1px" }}>
            <Skeleton.Input size="medium" active style={{ width: "25vw" }} />
          </div>
          <div className="universal-left" style={{ marginBottom: "-15px" }}>
            <Skeleton paragraph={false} title={{ width: "100%" }} active />
          </div>
          <div className="universal-left" style={{ marginBottom: "-5px" }}>
            <Skeleton paragraph={false} title={{ width: "10%" }} active />
          </div>
        </React.Fragment>
      </ModuleContainer>

      <h1 className="module-name" style={{ marginTop: "70px" }}>
        Added Companies
      </h1>

      <ModuleContainer>
        <Row>
          <Col span={3}>
            <Skeleton.Avatar size={56} />
          </Col>
          <Col span={21}>
            <div className="universal-left" style={{ marginBottom: "7px" }}>
              <Skeleton.Input size="small" active style={{ width: "25vw" }} />
            </div>
            <div className="universal-left" style={{ marginBottom: "0px" }}>
              <Skeleton.Input size="small" active style={{ width: "10vw" }} />
            </div>
          </Col>
        </Row>
      </ModuleContainer>
    </React.Fragment>
  );
};

export default withRouter(MyInternshipSkeleton);
