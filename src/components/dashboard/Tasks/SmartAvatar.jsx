import React from "react";
import { Avatar } from "antd";
import { Header, COLORS } from "../../Styled/FundamentalComponents";

const SmartAvatar = (props) => {
  const ColorList = [
    COLORS.CYAN_L,
    COLORS.PURPLE_L,
    COLORS.GREEN_L,
    COLORS.VOLCANO_L,
  ];

  return props.skeleton ? (
    <div
      className="student-info-avatar"
      style={{ backgroundColor: "#f0f0f0" }}
    ></div>
  ) : props.image ? (
    <div
      className="student-info-avatar"
      style={{ backgroundColor: ColorList[props.name.length % 4] }}
    >
      <Header
        className={props.fontSize ? props.fontSize : "sixteenFont"}
        color="white"
      >
        {props.name.substring(0, 1)}
      </Header>
    </div>
  ) : (
    <Avatar
      size={props.size}
      gap={-4}
      style={{ backgroundColor: ColorList[props.name.length % 4] }}
    >
      <span
        style={{
          position: "relative",
          top: props.topAdjustment ? props.topAdjustment : 0,
        }}
        className={`${props.fontSize ? props.fontSize : null}`}
      >
        {props.name.substring(0, 1)}
      </span>
    </Avatar>
  );
};

export default SmartAvatar;
