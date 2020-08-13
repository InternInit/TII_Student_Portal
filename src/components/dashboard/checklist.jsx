import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Progress } from "antd";
import {
  BorderOutlined,
  CheckOutlined,
  CheckSquareOutlined
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

import { Link } from "react-router-dom";

const ChecklistBorder = styled(BorderOutlined)`
  font-size: 18px;
  font-weight: bold;
`;

const Checked = styled(CheckOutlined)`
  fontsize: 18;
  color: green;
`;

const ChecklistText = styled.p`
  font-size: 18px;
`;

const CheckedText = styled.p`
  color: green;
`;

//Wrapper component
const ChecklistItem = styled.p`
  font-size: 18px;
  align-items: center;
  line-height: 18px;
  transition: 0.2s;
  &:hover {
    ${ChecklistBorder} {
      font-size: 24px;
      color: #1890ff;
      cursor: pointer;
      font-size: 24px;
      transition: 0.2s;
    }
    ${Checked} {
      cursor: default;
    }
    ${ChecklistText} {
      transition: 0.2s;
      color: #1890ff;
      font-size: 24px;
    }
  }
`;

//Functionality behind Checklist
function parseChecklist(checklist, page) {
  let parsedChecklist = checklist[page];
  switch (page) {
    case 0:
      let newChecklist = [];
      var count = 0;
      let completed = false;
      for (var i = 0; i < 9; i++) {
        if (parsedChecklist[i].completed) {
          count++;
        }
      }
      if (count == 9) {
        completed = true;
      }
      newChecklist.push({ key: "Contact Info", completed: completed });
      completed = false;
      count = 0;

      for (var i = 9; i < 17; i++) {
        if (parsedChecklist[i].completed) {
          count++;
        }
      }
      if (count == 8) {
        completed = true;
      }
      newChecklist.push({ key: "Internship Info", completed: completed });
      newChecklist.push(parsedChecklist[16]);
      parsedChecklist = newChecklist;
      break;
  }
  return parsedChecklist;
}

//Displaying Checklist
export default function Checklist(props) {
  return (
    <div>
      <QueueAnim
        type={["right", "left"]}
        ease={["easeOutQuart", "easeInOutQuart"]}
        leaveReverse
      >
        {/**
         * Mapping checklist elements
         */}
        {parseChecklist(props.checklist, props.page).map((item, index) => (
          <div key={index}>
            <ChecklistItem>
              {item.completed ? (
                <div>
                  <Checked
                    style={{
                      float: "left",
                      marginRight: "7px",
                      marginLeft: "20px",
                      paddingRight: "6px"
                    }}
                  />
                  <CheckedText>{item.key}</CheckedText>
                </div>
              ) : (
                <div>
                  <Link
                    to={`/apply/${props.linkTo}`}
                    style={{ color: "inherit" }}
                  >
                    <ChecklistBorder
                      style={{
                        float: "left",
                        marginRight: "7px",
                        marginLeft: "20px",
                        paddingRight: "6px"
                      }}
                    />{" "}
                    <ChecklistText>{item.key}</ChecklistText>
                  </Link>
                </div>
              )}
            </ChecklistItem>
          </div>
        ))}
      </QueueAnim>
    </div>
  );
}