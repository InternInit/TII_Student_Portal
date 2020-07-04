import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Progress } from "antd";

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  height: 440px;
  padding: 3%;
`;

const ProgressHeader = styled.h2`
  margin-bottom: 7px;
  display: inline;
  float: left;

  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  align-items: center;

  color: black;
`;

const PercentHeader = styled.h2`
  display: inline;
  float: right;

  font-weight: bold;
  font-size: 18px;
`;

const ViewChecklist = styled.p`
  margin-top: 4px;
  margin-bottom: 15px;

  font-family: Roboto;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  align-items: center;

  color: #1890ff;
`;

/*
******************************************
PERCENT COMPLETION ARRAY
[0] == Title Of the Section
[1] == Percentage Complete --> adaptable version to be implemented
[2] == Trail Color
[3] == Stroke Color
******************************************
*/
let percentComplete = [
  ["Internship Information", 85, "#e6f7ff", "#1890ff"],
  ["Personal", 50, "#fff7e6", "#fa8c16"],
  ["Essays", 25, "#fcffe6", "#a0d911"],
  ["References", 100, "#f9f0ff", "#722ed1"]
];

class ApplicationProgress extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="module-name">Application Progress</h1>
        <ModuleContainer>
          {percentComplete.map(section => (
            <React.Fragment>
              <ProgressHeader>{section[0]}</ProgressHeader>
              <PercentHeader>{section[1]}%</PercentHeader>
              <Progress
                percent={section[1]}
                trailColor={section[2]}
                strokeColor={section[3]}
                strokeWidth="15px"
                status="active"
                showInfo={false}
              />
              <ViewChecklist>
                <a href="#">View Checklist</a>
              </ViewChecklist>
            </React.Fragment>
          ))}
        </ModuleContainer>
      </React.Fragment>
    );
  }
}

export default ApplicationProgress;
