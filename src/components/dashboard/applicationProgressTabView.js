import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Progress } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

/*

Container to hold all the progress bars

*/
const ModuleContainer = styled.div`
  background: white;
  padding: 1%;
`;

/*

Header for name of the progress module
(e.g. Internship Information, Personal, Essays, References)

*/
const ProgressHeader = styled.h2`  
  display: inline;
  float: left;
  font-size: 14px;
  line-height: 28px;
  align-items: center;

  color: black;
`;

/*

Header for the percent complete

*/
const PercentHeader = styled.h2`
  display: inline;
  float: right;
  font-size: 14px;
`;





let percentComplete = [
    ["Tesla Application Progress", 85, "#e6f7ff", "#1890ff"],

];

class ApplicationProgress extends Component {
    render() {
        return (
            <React.Fragment>

                <ModuleContainer>
                    {percentComplete.map(section => (
                        <React.Fragment>
                            <ProgressHeader>{section[0]}</ProgressHeader>
                            <PercentHeader>
                                {section[1] < 100 ? (
                                    section[1] + "%"
                                ) : (
                                        <CheckCircleTwoTone
                                            style={{ fontSize: "24px" }}
                                            twoToneColor="#52c41a"
                                        />
                                    )}
                            </PercentHeader>
                            <Progress
                                percent={section[1]}
                                trailColor={section[2]}
                                strokeColor={section[1] < 100 ? section[3] : "#52c41a"}
                                strokeWidth="15px"
                                status="active"
                                showInfo={false}
                            />
                        </React.Fragment>
                    ))}
                </ModuleContainer>
            </React.Fragment>
        );
    }
}

export default ApplicationProgress;
