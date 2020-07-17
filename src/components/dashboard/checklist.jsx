import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Progress } from "antd";
import { BorderOutlined, CheckOutlined, CheckSquareOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

const ChecklistItem = styled.p`
  font-size: 14px;
  align-items: center;
  line-height: 18px;
  padding:6px;
  font-weight:500;
`;

function parseChecklist(checklist, page){
  let parsedChecklist = checklist[page];
  switch(page){
    case 0:
      let newChecklist = []
      var count = 0;
      let completed = false;
      for(var i=0; i<9; i++){
        if (parsedChecklist[i].completed){
          count++
        }
      }
      if(count == 9){
        completed = true;
      }
      newChecklist.push({"key":"Contact Info","completed": completed})
      completed=false;
      count=0;

      for(var i=9; i<17; i++){
        if (parsedChecklist[i].completed){
          count++
        }
      }
      if(count == 8){
        completed = true;
      }
      newChecklist.push({"key":"Internship Info","completed": completed})
      newChecklist.push(parsedChecklist[17])
      parsedChecklist = newChecklist
      break;
    default:
      break;
  }
  return parsedChecklist
}

export default function Checklist(props) {
  return (
    <div>
      <QueueAnim
        type={["right", "left"]}
        ease={["easeOutQuart", "easeInOutQuart"]}
        leaveReverse
      >
        {parseChecklist(props.checklist, props.page).map((item, index) => (
          <div key={index}>
            {item.completed ? <CheckOutlined
              style={{
                fontSize: 18,
                float: "left",
                marginRight: "7px",
                marginLeft: "20px",
                padding: '6px',
                color: 'green'
              }}
            /> :
            <BorderOutlined
              style={{
                fontSize: 18,
                float: "left",
                marginRight: "7px",
                marginLeft: "20px",
                padding: '6px',
              }}
            />}
            <ChecklistItem>{item.key}</ChecklistItem>
          </div>
        ))}
      </QueueAnim>
    </div>
  );
}
