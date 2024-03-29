import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import {
  CompanyTitle,
  JobTitle,
  TabContainer,
} from "../styledDashboardComponents";

import { Link } from "react-router-dom";

import { Avatar } from "antd";

const PendingTab = styled.div`
  font-weight: 600;
  display: flex;
  align-self: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mapping = [
  "this single item in the array is allowing me to use the queue animations lol",
];

function ActiveAppCompanytab(props) {
  let { name, companyId, industry, status } = props;
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

  let companyName = "";
  if (name.length >= 44) {
    companyName = name.substring(0, 44) + "...";
  } else {
    companyName = name;
  }

  return (
    <QueueAnim type="scale" ease={["easeOutQuart", "easeInOutQuart"]}>
      {mapping.map((item, index) => (
        <div key={index}>
          <Link
            to={`/dashboard/add-companies/company-information/${companyId}`}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <TabContainer
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {/**Company Logo + Name + Position */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                {/**company logo */}
                <Avatar
                  size={36}
                  shape="square"
                  src={props.avatar}
                  style={{
                    marginBottom: "14px",
                    width: "36px",
                    height: "auto",
                  }}
                />

                {/**company name and job */}
                <Col
                  style={{
                    marginLeft: "30px",
                    alignItems: "flex-start",
                  }}
                >
                  <CompanyTitle className="twentyFourFont">
                    {companyName}
                  </CompanyTitle>
                  <JobTitle
                    style={{ paddingTop: "4px" }}
                    className="fourteenFont"
                  >
                    {industry}
                  </JobTitle>
                </Col>
              </div>
              <PendingTab style={{ color: tabColor }} className="eighteenFont">
                {status}
              </PendingTab>
            </TabContainer>
          </Link>
        </div>
      ))}
    </QueueAnim>
  );
}
export default ActiveAppCompanytab;
