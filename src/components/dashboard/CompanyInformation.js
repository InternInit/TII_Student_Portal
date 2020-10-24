import React from "react";
import styled from "styled-components";
import {
  Breadcrumb,
  Avatar,
  Row as AntRow,
  Col as AntCol,
  Skeleton,
  Grid
} from "antd";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { industryIcons } from "./industryIcons";
import _ from "underscore";
import { uniq } from "underscore";
import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

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
  width: 100%;
`;

const Header = styled.div`
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

    this.animation = [];

    this.state = {
      info: {},
      isLoading: true,
      show: false,
    };
  }

  componentDidMount() {
    let idList = [];
    let id = window.location.href.split("/")[6];
    idList.push(id);
    this.matchBusinesses(JSON.stringify(idList));
    window.scrollTo(0, 0);
    console.log("Mounted and Info is:" + this.state.info.description);
  }

  matchBusinesses = (businessList) => {
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
          this.setState({ isLoading: false });
        } catch (e) {
          console.log(e);
        }
      });
  };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const { info, isLoading, show } = this.state;

    if (info === null) {
      return null;
    }

    if (isLoading) {
      return <Skeleton />;
    } else {
      console.log(info);
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
              marginTop: "2vh",
            }}
            className="eighteenFont"
          >
            <Link to="/dashboard/add-companies">
              <Breadcrumb.Item>Add Companies</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item>{info.name}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="company-info-card">
            <div className="company-info-banner">
              <img
                className="company-info-banner-img"
                src={info["alt_image"]}
                alt={info.name}
              ></img>
            </div>
            <div className="company-info-inner-content">
              {/**
               *
               * Company Logo and Name
               *
               */}
              <div>
                <AntRow>
                  <Avatar size={75} src={info.avatar} />
                  <div>
                    <h1 className="company-info-company-name thirtySixFont">
                      {info.name}
                    </h1>
                    <h1 className="company-info-company-location twentyTwoFont">
                      {info.location}
                    </h1>
                  </div>
                </AntRow>

                <AntRow style={{ width: "100%" }}>
                  <h1 className="company-info-subsection-header twentyEightFont mt-2 mb-2 universal-left">
                    Company Overview
                  </h1>
                </AntRow>

                {/**
                 *
                 * Company Description
                 *
                 */}
                <Row>
                  <div className="company-info-description sixteenFont">
                    {show || info.description.length < 1000 ? (
                      <div>{info.description}</div>
                    ) : (
                      <div style={{ height: "200px", overflow: "hidden" }}>
                        {info.description}
                      </div>
                    )}
                  </div>
                  <p
                    className="company-info-read-more-button sixteenFont"
                    onClick={this.toggle}
                  >
                    {info.description.length < 1000
                      ? null
                      : show
                      ? "Read Less"
                      : "Read More"}
                  </p>
                </Row>

                <AntRow style={{ width: "100%" }}>
                  <h1 className="company-info-subsection-header twentyEightFont mt-4 mb-2 universal-left">
                    Open Positions
                  </h1>
                </AntRow>

                <RenderListings listings={info.listings} />

                <div className="company-info-div-break" />

                <AntRow style={{ width: "100%" }}>
                  <h1 className="company-info-subsection-header twentyEightFont mt-4 mb-2 universal-left">
                    About
                  </h1>
                </AntRow>

                <AntRow gutter={[32, 16]}>
                  <AntCol span={12}>
                    <div className="company-info-sub-card">
                      <h1 className="sub-card-heading twentyEightFont">
                        Internship Facts
                      </h1>
                      <h2 className="sub-card-sub-heading sixteenFont">
                        Industry
                      </h2>
                      <p className="sixteenFont">{info.industry}</p>
                      <h2 className="sub-card-sub-heading sixteenFont">
                        Work Time
                      </h2>
                      <p className="sixteenFont">
                        {info.starttime} - {info.endtime}
                      </p>
                      <h2 className="sub-card-sub-heading sixteenFont">
                        Additional Information
                      </h2>
                      <p className="sixteenFont">
                        - AP CSA - AP CSP - Must be 18+
                      </p>
                    </div>
                  </AntCol>
                  <AntCol span={12}>
                    <div className="company-info-sub-card">
                      <h1 className="sub-card-heading twentyEightFont">
                        Contact
                      </h1>
                      <h2 className="sub-card-sub-heading sixteenFont">
                        Website
                      </h2>
                      <p className="sixteenFont">
                        <a href={info.website}>{info.website}</a>
                      </p>
                      <h2 className="sub-card-sub-heading sixteenFont">
                        Email
                      </h2>
                      <p className="sixteenFont">{info.email}</p>
                      <h2 className="sub-card-sub-heading sixteenFont">
                        Phone Number
                      </h2>
                      <p className="sixteenFont">{info.phonenumber}</p>
                    </div>
                  </AntCol>
                </AntRow>

                {/**
                 *
                 * Links To Social
                 *
                 */}
                <Row>
                  <Header className="twentyFourFont">Links</Header>
                  <AntRow
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
                  </AntRow>
                </Row>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const ListingCard = (props) => {
  let ind = props.industry.split(" ").join("");
  const industryKey = ind.toLowerCase();

  const screens = useBreakpoint();
  const isDesktop = Object.entries(screens).filter(screen => !!screen[1]).length > 2;

  return (
    <AntCol span={isDesktop ? 6 : 12} >
      <div className="company-info-listing-card">
        <div className="company-info-listing-card-icon-box mb-1">
          <div>{industryIcons[industryKey]}</div>
        </div>
        {/***
         * Font-size assigned in CSS class to adjust based on card resizing
         */}
        <h1 className="sub-card-heading sixteenFont">{props.position}</h1>
      </div>
    </AntCol>
  );
};

const RenderListings = (props) => {
  let filtered_results = _.uniq(props.listings, "Listing Type");

  return (
    <div>
      <AntRow gutter={[32, 16]} style={{ marginBottom: "4vh" }}>
        {filtered_results.map((listing) => (
          <ListingCard position={listing.Title} industry={listing.Industry} />
        ))}
      </AntRow>
    </div>
  );
};

export default CompanyInformation;
