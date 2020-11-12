import React, { useState } from "react";
import styled from "styled-components";
import {
  Breadcrumb,
  Avatar,
  Row as AntRow,
  Col as AntCol,
  Skeleton,
  Grid,
  Tooltip,
  message,
} from "antd";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import "antd/dist/antd.css";

import { FaInstagram, FaCheck, FaPlus } from "react-icons/fa";
import { industryIcons } from "./industryIcons";
import _ from "underscore";

import { Link } from "react-router-dom";
import { Spring, config } from "react-spring/renderprops";

const { useBreakpoint } = Grid;

const Header = styled.div`
  margin-top: 30px;
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
      isCompanyAdded: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let idList = [];
    let id = window.location.href.split("/")[6];
    idList.push(id);
    this.matchBusinesses(JSON.stringify(idList));
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

  addCompany = () => {
    this.setState({ isCompanyAdded: !this.state.isCompanyAdded });
  };

  render() {
    const { info, isLoading, show } = this.state;

    if (info === null) {
      return null;
    }

    if (isLoading) {
      return (
        <>
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
            <Breadcrumb.Item>
              <Skeleton.Input size="small" style={{ width: "10vw" }} />{" "}
            </Breadcrumb.Item>
          </Breadcrumb>
          <CompanyInformationSkeleton />
        </>
      );
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
                <CompanyHeading info={info} status={false} />

                <AntRow style={{ width: "100%" }}>
                  <h1 className="company-info-subsection-header twentyEightFont mb-2 universal-left">
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

                <AntRow style={{ width: "100%" }}>
                  <h1 className="company-info-subsection-header twentyEightFont mt-2 mb-2 universal-left">
                    About
                  </h1>
                </AntRow>

                <AboutSection info={info} />

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

const CompanyHeading = (props) => {
  const { info, status } = props;

  const [isCompanyAdded, changeCompanyStatus] = useState(status);

  const addCompany = () => {
    changeCompanyStatus(!isCompanyAdded);
    if (!isCompanyAdded) {
      message.success(`Company Pinned! 🎉`);
    } else {
      message.success(`Company Removed`);
    }
  };

  return (
    <AntRow gutter={[0, 32]} style={{ position: "relative" }}>
      <AntCol>
        <Avatar size={70} src={info.avatar} />
      </AntCol>
      <AntCol flex="auto">
        <div>
          <h1
            className={
              info.name.length < 15
                ? "company-info-company-name thirtySixFont"
                : "company-info-company-name-responsive thirtySixFont"
            }
          >
            {info.name}
          </h1>
          <h1 className="company-info-company-location twentyTwoFont">
            {info.location}
          </h1>
        </div>
      </AntCol>
      <AntCol className="universal-middle">
        <AntRow justify="end">
          <Tooltip title={isCompanyAdded ? "Remove Company" : "Add Company"}>
            <div
              className="company-info-add-button"
              style={{
                border: isCompanyAdded && "3px solid #52c41a",
              }}
              onClick={addCompany}
            >
              <Spring
                from={{
                  opacity: 0,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                to={{
                  position: "absolute",
                  top: "7px",
                  left: "7px",
                  opacity: isCompanyAdded ? 1 : 0,
                  fontSize: 20,
                  transform: isCompanyAdded ? "rotate(0deg)" : "rotate(360deg)",
                  color: "#52c41a",
                }}
                config={config.stiff}
              >
                {(props) => <FaCheck style={props} />}
              </Spring>
              <Spring
                from={{
                  opacity: 0,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                to={{
                  position: "absolute",
                  top: "7px",
                  left: "7px",
                  opacity: isCompanyAdded ? 0 : 1,
                  fontSize: 20,
                  transform: isCompanyAdded ? "rotate(0deg)" : "rotate(360deg)",
                }}
                config={config.stiff}
              >
                {(props) => <FaPlus style={props} />}
              </Spring>
            </div>
          </Tooltip>
        </AntRow>
      </AntCol>
    </AntRow>
  );
};

const ListingCard = (props) => {
  let ind = props.industry.split(" ").join("");
  const industryKey = ind.toLowerCase();

  const screens = useBreakpoint();
  const isDesktop =
    Object.entries(screens).filter((screen) => !!screen[1]).length > 2;

  return (
    <>
      <AntCol span={isDesktop ? 6 : 12}>
        <div className="company-info-listing-card">
          <div className="company-info-listing-card-icon-box">
            <div>{industryIcons[industryKey]}</div>
          </div>
          {/***
           * Font-size assigned in CSS class to adjust based on card resizing
           */}
          <div className="company-info-listing-card-position-box">
            <h1 className="sub-card-heading sixteenFont">{props.position}</h1>
          </div>
        </div>
      </AntCol>
    </>
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

const AboutSection = ({ info }) => {
  const screens = useBreakpoint();
  const isDesktop =
    Object.entries(screens).filter((screen) => !!screen[1]).length > 2;

  return (
    <AntRow gutter={[32, 16]}>
      <AntCol span={isDesktop ? 12 : 24}>
        <div className="company-info-sub-card">
          <h1 className="sub-card-heading twentyEightFont">Internship Facts</h1>
          <h2 className="sub-card-sub-heading sixteenFont">Industry</h2>
          <p className="sixteenFont">{info.industry}</p>
          <h2 className="sub-card-sub-heading sixteenFont">Work Time</h2>
          <p className="sixteenFont">
            {info.starttime} - {info.endtime}
          </p>
          <h2 className="sub-card-sub-heading sixteenFont">
            Additional Information
          </h2>
          <p className="sixteenFont">- AP CSA - AP CSP - Must be 18+</p>
        </div>
      </AntCol>
      <AntCol span={isDesktop ? 12 : 24}>
        <div className="company-info-sub-card">
          <h1 className="sub-card-heading twentyEightFont">Contact</h1>
          <h2 className="sub-card-sub-heading sixteenFont">Website</h2>
          <p className="sixteenFont">
            <a href={info.website}>{info.website}</a>
          </p>
          <h2 className="sub-card-sub-heading sixteenFont">Email</h2>
          <p className="sixteenFont">{info.email}</p>
          <h2 className="sub-card-sub-heading sixteenFont">Phone Number</h2>
          <p className="sixteenFont">{info.phonenumber}</p>
        </div>
      </AntCol>
    </AntRow>
  );
};

const CompanyInformationSkeleton = (props) => {
  const screens = useBreakpoint();

  const isDesktop =
    Object.entries(screens).filter((screen) => !!screen[1]).length > 2;

  return (
    <>
      <div className="company-info-card">
        <div className="company-info-banner-skeleton" />
        <div className="company-info-inner-content-skeleton">
          <AntRow>
            <Skeleton.Avatar active size={75} style={{ float: "left" }} />
            <div style={{ marginLeft: "2vw" }}>
              <div style={{ marginBottom: "1vh" }}>
                <Skeleton.Input active size="large" style={{ width: "17vw" }} />
              </div>
              <div className="universal-left">
                <Skeleton.Input active size="small" style={{ width: "12vw" }} />
              </div>
            </div>
          </AntRow>
          <AntRow style={{ width: "100%" }}>
            <h1 className="company-info-subsection-header twentyEightFont mt-2 mb-2 universal-left">
              Company Overview
            </h1>
          </AntRow>
          <AntRow>
            <Skeleton
              active
              className="company-info-description-skeleton"
              title={false}
              paragraph={{ rows: 8 }}
            />
          </AntRow>
          <AntRow style={{ width: "100%" }}>
            <h1 className="company-info-subsection-header twentyEightFont mt-4 mb-2 universal-left">
              Open Positions
            </h1>
          </AntRow>
          <AntRow gutter={[32, 16]}>
            <AntCol span={isDesktop ? 6 : 12}>
              <div
                className="company-info-listing-card-skeleton"
                style={{ textAlign: "center" }}
              >
                <Skeleton.Avatar active size={48} />
                <Skeleton.Input
                  active
                  className="mt-1"
                  style={{ textAlign: "center", width: "8vw" }}
                />
              </div>
            </AntCol>
            <AntCol span={isDesktop ? 6 : 12}>
              <div
                className="company-info-listing-card-skeleton"
                style={{ textAlign: "center" }}
              >
                <Skeleton.Avatar active size={48} />
                <Skeleton.Input
                  active
                  className="mt-1"
                  style={{ textAlign: "center", width: "8vw" }}
                />
              </div>
            </AntCol>
          </AntRow>
          <div className="company-info-div-break" />
          <AntRow style={{ width: "100%" }}>
            <h1 className="company-info-subsection-header twentyEightFont mt-4 mb-2 universal-left">
              About
            </h1>
          </AntRow>
          <AntRow gutter={[32, 16]}>
            <AntCol span={isDesktop ? 12 : 24}>
              <div className="company-info-sub-card">
                <h1 className="sub-card-heading twentyEightFont">
                  Internship Facts
                </h1>
                <h2 className="sub-card-sub-heading sixteenFont">Industry</h2>
                <Skeleton active title={false} paragraph={{ rows: 1 }} />
                <h2 className="sub-card-sub-heading sixteenFont">Work Time</h2>
                <Skeleton active title={false} paragraph={{ rows: 1 }} />
                <h2 className="sub-card-sub-heading sixteenFont">
                  Additional Information
                </h2>
                <Skeleton active title={false} paragraph={{ rows: 1 }} />
              </div>
            </AntCol>
            <AntCol span={isDesktop ? 12 : 24}>
              <div className="company-info-sub-card">
                <h1 className="sub-card-heading twentyEightFont">Contact</h1>
                <h2 className="sub-card-sub-heading sixteenFont">Website</h2>
                <Skeleton active title={false} paragraph={{ rows: 1 }} />
                <h2 className="sub-card-sub-heading sixteenFont">Email</h2>
                <Skeleton active title={false} paragraph={{ rows: 1 }} />
                <h2 className="sub-card-sub-heading sixteenFont">
                  Phone Number
                </h2>
                <Skeleton active title={false} paragraph={{ rows: 1 }} />
              </div>
            </AntCol>
          </AntRow>
        </div>
      </div>
    </>
  );
};

export default CompanyInformation;
