import React from "react";
import styled from "styled-components";
import "../dashboard.scss";
import { BorderOutlined, CheckOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

import { Link } from "react-router-dom";

const ChecklistBorder = styled(BorderOutlined)`
  font-size: 16px;
  font-weight: bold;
`;

const Checked = styled(CheckOutlined)`
  fontsize: 16px;
  color: green;
`;

const ChecklistText = styled.p`
  font-size: 16px;
`;

const CheckedText = styled.p`
  color: green;
`;

//Wrapper component
const ChecklistItem = styled.p`
  font-size: 16px;
  align-items: center;
  line-height: 16px;
  transition: 0.2s;
  &:hover {
    ${ChecklistBorder} {
      font-size: 18px;
      color: #1890ff;
      line-height: 18px;
      cursor: pointer;
      transition: 0.2s;
    }
    ${Checked} {
      cursor: default;
    }
    ${ChecklistText} {
      transition: 0.2s;
      color: #1890ff;
      font-size: 18px;
    }
  }
`;

//Functionality behind Checklist
function parseChecklist(checklist, page) {
  let parsedChecklist = checklist[page];
  let newChecklist = [];
  let count = 0;
  let completed = false;
  switch (page) {
    case 0:
      for (let i = 0; i < 9; i++) {
        if (parsedChecklist[i].completed) {
          count++;
        }
      }
      if (count === 9) {
        completed = true;
      }
      newChecklist.push({ key: "Contact Information", completed: completed });
      completed = false;
      count = 0;

      for (let i = 9; i < 17; i++) {
        if (parsedChecklist[i].completed) {
          count++;
        }
      }
      if (count === 8) {
        completed = true;
      }
      newChecklist.push({
        key: "Internship Information",
        completed: completed,
      });
      newChecklist.push(parsedChecklist[16]);
      parsedChecklist = newChecklist;
      break;
    case 1:
      for (let i = 0; i < 2; i++) {
        if (parsedChecklist[i].completed) {
          count++;
        }
      }
      if (count === 2) {
        completed = true;
      }
      newChecklist.push({ key: "Personal Information", completed: completed });
      newChecklist.push(parsedChecklist[2]);
      parsedChecklist = newChecklist;
      break;
    case 2:
      for (let i = 0; i < 2; i++) {
        newChecklist.push({
          key: "Essay #" + (i + 1).toString(),
          completed: parsedChecklist[i].completed,
        });
      }
      newChecklist.push({
        key: "Additional Information",
        completed: parsedChecklist[2].completed,
      });
      parsedChecklist = newChecklist;
      break;
    case 3:
      break;
    case 4:
      parsedChecklist[0].key = "Reference Contact Information";
      break;
    default:
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
                      paddingRight: "6px",
                    }}
                  />
                  <CheckedText>{item.key}</CheckedText>
                </div>
              ) : (
                <div>
                  <Link
                    to={`/apply/${props.linkTo}#${item.key.replace(
                      /\s|#/g,
                      ""
                    )}`}
                    style={{ color: "inherit" }}
                  >
                    <ChecklistBorder
                      style={{
                        float: "left",
                        marginRight: "7px",
                        marginLeft: "20px",
                        paddingRight: "6px",
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
