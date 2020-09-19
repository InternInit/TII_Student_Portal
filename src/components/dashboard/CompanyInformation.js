import React from "react";
import styled from "styled-components";
import { Divider, Breadcrumb, Avatar } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

const ModuleContainer = styled.div`
  background: white;
  border-radius: 10px;
  flex-direction: column;
  margin-top: 10px;

  min-width: 400px;
  display: flex;
  align-items: center;

  padding: 3%;
`;
const Image = styled.img`
  background-color: #d9d9d9;
  width: 100%;
  margin-left: 2vh;
  margin-right: 2vh;
  height: 225px;
  border-radius: 8px;
  object-fit: cover;
`;

const Caption = styled.div`
  display: flex;
  text-align: left;
  font-weight: normal;
  color: 000;
  width: 80%;
  margin-top: 10px;
`;

const Header = styled.div`
  font-weight: bold;
  color: 0000;
  margin-top: 30px;
`;

const SectionHeader = styled.span`
  color: black;
  font-weight: normal;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/*
=================================================================

                          SOCIAL  ICONS

=================================================================
*/
const Facebook = styled(AiFillFacebook)`
  margin-top: 10px;
  color: #3b5998;
  :hover {
    cursor: pointer;
  }
`;

const Twitter = styled(AiFillTwitterSquare)`
  margin-top: 10px;
  margin-right: 4px;
  color: #1da1f2;
  :hover {
    cursor: pointer;
  }
`;

const Instagram = styled(FaInstagram)`
  margin-top: 14px;
  margin-right: 4px;
  color: white;
  border-radius: 4px;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  :hover {
    cursor: pointer;
  }
`;

const LinkedIn = styled(AiFillLinkedin)`
  margin-top: 10px;
  color: #0e76a8;
  :hover {
    cursor: pointer;
  }
`;

class CompanyInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
  }

  componentDidMount() {
    let idList = [];
    let id = window.location.href.split("/")[6];
    idList.push(id);
    this.matchBusinesses(JSON.stringify(idList));
    window.scrollTo(0, 0);
  }

  matchBusinesses(businessList) {
    fetch("/api/match_businesses", {
      method: "POST",
      body: JSON.parse(JSON.stringify(businessList)),
    })
      .then((response) => response.json())
      .then((data) => {
        try {
          let matchedBusinessesArray = [];
          JSON.parse(data).hits.hits.forEach((item) =>
            matchedBusinessesArray.push(item._source)
          );
          //console.log(matchedBusinessesArray)
          this.setState({ info: matchedBusinessesArray[0] });
        } catch (e) {
          console.log(e);
        }
      });
  }

  render() {
    let { info } = this.state;
    if (info === null) {
      return null;
    }
    return (
      <React.Fragment>
        {/**
         *
         * Breadcrumb
         *
         */}
        <Breadcrumb
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: "500",
            marginTop: "30px",
          }}
          className="eighteenFont"
        >
          <Link to="/dashboard/add-companies">
            <Breadcrumb.Item>Add Companies</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item>{info.name}</Breadcrumb.Item>
        </Breadcrumb>

        <ModuleContainer>
          {/**
           *
           * Company Logo and Name
           *
           */}
          <div style={{ width: "85%", marginTop: "18px" }}>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "40px",

                alignItems: "center",
              }}
            >
              <Avatar
                size={40}
                src={info.avatar}
                style={{
                  width: "100px",
                  height: "auto",
                }}
              />
              <Header
                style={{
                  textAlign: "left",
                  marginLeft: "15px",
                  color: "#8C8C8C",
                  marginTop: "0px",
                  fontWeight: "500",
                }}
                className="twentyEightFont"
              >
                {info.name}
              </Header>
            </Row>

            {/**
             *
             * Divider
             *
             */}
            <Divider>
              <SectionHeader
                style={{
                  color: "#595959",
                  paddingBottom: "25px",
                  marginTop: "25px",
                }}
                className="thirtySixFont"
              >
                Company Overview
              </SectionHeader>
            </Divider>

            {/**
             *
             * Company Description
             *
             */}
            <Row>
              <Header className="twentyFourFont">Company Description</Header>
              <Caption className="sixteenFont">{info.description}</Caption>
            </Row>

            {/**
             *
             * Images + Caption
             *
             */}
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: "45px",
                marginBottom: "70px",
              }}
            >
              <Row>
                <Image
                  src={info.avatar}
                  alt="Logo"
                  style={{ marginTop: "10px" }}
                />
              </Row>
            </Row>

            {/**
             *
             * Divider
             *
             */}
            <Divider>
              <SectionHeader
                style={{
                  color: "#595959",
                  paddingBottom: "25px",
                  marginTop: "40px",
                }}
                className="thirtySixFont"
              >
                Internship Information
              </SectionHeader>
            </Divider>

            {/**
             *
             * Intership Description
             *
             */}
            <Row>
              <Header className="twentyFourFont">Description</Header>
              <Caption className="sixteenFont">{info.description}</Caption>
            </Row>

            {/**
             *
             * Location
             *
             */}
            <Row>
              <Header className="twentyFourFont">Location</Header>
              <Caption className="sixteenFont">{info.location}</Caption>
            </Row>

            {/**
             *
             * Location
             *
             */}
            <Row>
              <Header className="twentyFourFont">Industry</Header>
              <Caption className="sixteenFont">{info.industry}</Caption>
            </Row>

            {/**
             *
             * Work Period
             *
             */}
            <Row>
              <Header className="twentyFourFont">Work Period</Header>
              <Caption className="sixteenFont">
                {info.starttime} - {info.endtime}
              </Caption>
            </Row>

            {/**
             *
             * Additional Information
             *
             */}
            <Row style={{ marginBottom: "45px" }}>
              <Header className="twentyFourFont">Additional Information</Header>
              <Caption className="sixteenFont">
                - AP CSA - AP CSP - Must be 18+
              </Caption>
            </Row>

            {/**
             *
             * Divider
             *
             */}
            <Divider>
              <SectionHeader
                style={{
                  color: "#595959",
                  paddingBottom: "25px",
                  marginTop: "25px",
                }}
                className="thirtySixFont"
              >
                Contact Information
              </SectionHeader>
            </Divider>

            {/**
             *
             * Website
             *
             */}
            <Row>
              <Header className="twentyFourFont">Website</Header>
              <Caption className="sixteenFont">{info.website}</Caption>
            </Row>

            {/**
             *
             * Email
             *
             */}
            <Row>
              <Header className="twentyFourFont">E-Mail</Header>
              <Caption className="sixteenFont">{info.email}</Caption>
            </Row>

            {/**
             *
             * Phone Number
             *
             */}
            <Row>
              <Header className="twentyFourFont">Phone Number</Header>
              <Caption className="sixteenFont">{info.phonenumber}</Caption>
            </Row>

            {/**
             *
             * Links To Social
             *
             */}
            <Row>
              <Header className="twentyFourFont">Links</Header>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Facebook size={36} alt="facebook" />
                <Twitter size={36} alt="twitter" />
                <Instagram size={28} alt="instagram" />
                <LinkedIn size={36} alt="linkedin" />
              </Row>
            </Row>
          </div>
        </ModuleContainer>
      </React.Fragment>
    );
  }
}

export default CompanyInformation;
