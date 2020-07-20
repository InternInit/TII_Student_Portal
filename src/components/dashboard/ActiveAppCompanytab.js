import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";

const CompanyTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: black;
  align-items: center;
  height: 29px;
  margin-bottom: 6px;
`;

const JobTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #262626;
  margin-bottom: 10px;
  margin-top: 6px;
`;


const PendingTab = styled.div`
  font-size: 18px;
  font-weight:600;
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
  margin-left: 6%;
  margin-bottom: 14px;
  border-radius:6px;
`;

const TabContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 5px;
  //border: solid 0.5px #d9d9d9;
  background-color: white;
`;
const mapping = [
    "this single item in the array is allowing me to use the queue animations lol"
];


function ActiveAppCompanytab(props) {

    let { name, industry, logo, status } = props;
    let tabColor = '#fadb14';
    switch (status) {
        case 'pending':
            tabColor = '#fadb14';
            break;
        case 'accepted':
            tabColor = '#52c41a';
            break;
        case 'rejected':
            tabColor = '#f5222d';
            break;
        default:
    }
    return (
        <QueueAnim type="scale" ease={["easeOutQuart", "easeInOutQuart"]}>
            {mapping.map((item, index) => (
                <div key={index}>
                    <TabContainer style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
                            <Logo src={logo} alt="Logo" />

                            {/**company name and job */}
                            <Col
                                style={{
                                    marginLeft: "30px",
                                    alignItems: "flex-start"
                                }}
                            >
                                <CompanyTitle>{name}</CompanyTitle>
                                <JobTitle style={{ paddingTop: "4px" }}>
                                    {industry}
                                </JobTitle>
                            </Col>
                        </div>
                        <PendingTab style={{ color: tabColor }}>{status}</PendingTab>
                    </TabContainer>
                </div>
            ))}
        </QueueAnim>
    );
} export default ActiveAppCompanytab;

