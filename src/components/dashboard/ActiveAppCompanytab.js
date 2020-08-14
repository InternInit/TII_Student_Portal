import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import {
  CompanyTitle,
  JobTitle,
  TabContainer
} from "./styledDashboardComponents";

const PendingTab = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-self: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: fill;
  background-color: blue;
  margin-left: 4.5%;
  margin-bottom: 14px;
  border-radius: 6px;
`;
const mapping = [
  "this single item in the array is allowing me to use the queue animations lol"
];

function ActiveAppCompanytab(props) {
  let { name, industry, logo, status } = props;
  let tabColor = "";
  switch (status) {
    case "Pending":
      tabColor = "#fadb14";
      break;
    case "Accepted":
      tabColor = "#52c41a";
      break;
    case "Rejected":
      tabColor = "#f5222d";
      break;
    default:
  }
  return (
    <QueueAnim type="scale" ease={["easeOutQuart", "easeInOutQuart"]}>
      {mapping.map((item, index) => (
        <div key={index}>
          <TabContainer
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {/**Company Logo + Name + Position */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                alignItems: "center"
              }}
            >
              {/**company logo */}
              <Logo src={logo} alt="Logo" />

              {/**company name and job */}
              <Col
                style={{
                  marginLeft: "30px",
                  alignItems: "flex-start"
                }}
              >
                <CompanyTitle>{name}</CompanyTitle>
                <JobTitle style={{ paddingTop: "4px" }}>{industry}</JobTitle>
              </Col>
            </div>
            <PendingTab style={{ color: tabColor }}>{status}</PendingTab>
          </TabContainer>
        </div>
      ))}
    </QueueAnim>
  );
}
export default ActiveAppCompanytab;