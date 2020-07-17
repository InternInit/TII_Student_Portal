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
  return (
    <div>
      <QueueAnim
        type={["right", "left"]}
        ease={["easeOutQuart", "easeInOutQuart"]}
        leaveReverse
      >
        {props.checklist[props.page].map((item, index) => (
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
