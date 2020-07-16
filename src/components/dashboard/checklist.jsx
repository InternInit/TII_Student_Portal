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

export default function Checklist(props) {
  let checklist = [{"field":"firstName","value":"Tejas", "completed":true},{"field":"lastName","value":"Maraliga", "completed":false},{"field":"Age","value":18, "completed":true}];
  return (
    <div>
      <QueueAnim
        type={["right", "left"]}
        ease={["easeOutQuart", "easeInOutQuart"]}
        leaveReverse
      >
        {checklist.map((item, index) => (
          <div key={index}>
            {item.completed ? <CheckOutlined
              style={{
                fontSize: 18,
                float: "left",
                marginRight: "7px",
                marginLeft: "20px",
                padding: '6px',
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
            <ChecklistItem>{item.field}</ChecklistItem>
          </div>
        ))}
      </QueueAnim>
    </div>
  );
}
