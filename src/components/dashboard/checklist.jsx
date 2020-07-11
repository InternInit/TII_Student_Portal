import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import { Progress } from "antd";
import { BorderOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

const ChecklistItem = styled.p`
  font-size: 18px;
  align-items: center;
  line-height: 24px;
`;

export default function Checklist(props) {
  return (
    <div>
      <QueueAnim
        type={["right", "left"]}
        ease={["easeOutQuart", "easeInOutQuart"]}
        leaveReverse
      >
        {props.checklist.map((item, index) => (
          <div key={index}>
            <BorderOutlined
              style={{
                fontSize: 24,
                float: "left",
                marginRight: "7px",
                marginLeft: "20px"
              }}
            />
            <ChecklistItem>{item}</ChecklistItem>
          </div>
        ))}
      </QueueAnim>
    </div>
  );
}
