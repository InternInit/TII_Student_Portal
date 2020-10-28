import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { Button, Avatar, message } from "antd";
import {
  CompanyTitle,
  JobTitle,
  TabContainer,
} from "./styledDashboardComponents";

const QVCompany = styled.div`
  font-family: Lato;
  font-weight: bold;
  color: #262626;

  text-align: left;
`;

const QVTitle = styled.div`
  font-weight: 500;
  color: #722ed1;

  text-align: left;
`;

const QVCaption = styled.div`
  font-family: Roboto;
  font-weight: normal;
  color: #262626;
  text-align: left;

  max-width: 400px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  background-color: #d9d9d9;
  border-radius: 10px;
  object-fit: cover;
`;

const mapping = [
  "this single item in the array is allowing me to use the queue animations lol",
];

const contentStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
};

class SearchCompanytab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let {
      name,
      industry,
      logo,
      image,
      description,
      location,
      companyid,
    } = this.props;
    let { show } = this.state;
    let ctab = <CLabel name={name} industry={industry} logo={logo} />;

    let showDescription = description;
    if (description.length >= 250) {
      showDescription = description.substring(0, 250) + " . . .";
    }

    return (
      <>
        <div onClick={this.handleClick}>
          <CSSTransition
            in={!show}
            timeout={50}
            classNames="add-company-normalview"
            unmountOnExit
          >
            <CLabel name={name} industry={industry} logo={logo} />
          </CSSTransition>
        </div>
        <div onClick={this.handleClick}>
          <CSSTransition
            in={show}
            timeout={200}
            classNames="add-company-quickview"
            unmountOnExit
          >
            <QuickView
              companyObject={this.props.companyObject}
              name={name}
              industry={industry}
              image={image}
              description={showDescription}
              location={location}
              companyid={companyid}
              updateBusinessStatus={this.props.updateBusinessStatus}
              addPinnedBusiness={this.props.addPinnedBusiness}
            />
          </CSSTransition>
        </div>
      </>
    );
    /*
    return (
      <>
        {show ? (
          <div onClick={this.handleClick}>
            <QuickView
              companyFull={this.props.companyFull}
              name={name}
              industry={industry}
              image={image}
              description={showDescription}
              location={location}
              companyid={companyid}
              updateBusinessStatus={this.props.updateBusinessStatus}
            />
          </div>
        ) : (
          <div onClick={this.handleClick}>
            <CLabel name={name} industry={industry} logo={logo} />
          </div>
        )}
      </>
    );

    if (show === true) {
      ctab = (
        <QuickView
          companyFull={this.props.companyFull}
          name={name}
          industry={industry}
          image={image}
          description={showDescription}
          location={location}
          companyid={companyid}
          updateBusinessStatus={this.props.updateBusinessStatus}
          addPinnedBusiness={this.props.addPinnedBusiness}
          companyObject={this.props.companyObject}
        />
      );
    }

    return (
      <div onClick={this.handleClick}>
        {ctab}
      </div>
    );
    */
  }

  //Handles Switching of Tab

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
}
export default SearchCompanytab;

/*

Standard View of the Tab.

*/

class CLabel extends React.Component {
  render() {
    let { name, industry, logo } = this.props;

    let companyName = "";
    if (name.length >= 44) {
      companyName = name.substring(0, 44) + "...";
    } else {
      companyName = name;
    }
    return (
      <>
        {mapping.map((item, index) => (
          <div key={index}>
            <TabContainer>
              {/**Company Logo + Name + Position */}

              <div style={contentStyle}>
                {/**company logo */}
                <Avatar
                  size={36}
                  shape="square"
                  src={logo}
                  style={{
                    marginLeft: "8%",
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
            </TabContainer>
          </div>
        ))}
      </>
    );
  }
}

/*

Quick View of the Tab.
Gives additional Information when hovered over

*/
class QuickView extends React.Component {
  addCompany = () => {
    console.log(this.props);
    message.success(`Company Pinned! 🎉`);
    this.props.updateBusinessStatus(this.props.companyid, "Pinned");
    this.props.addPinnedBusiness(this.props.companyObject);
  };

  render() {
    let {
      name,
      industry,
      image,
      description,
      location,
      companyid,
    } = this.props;

    return (
      <>
        {mapping.map((item, index) => (
          <div key={index}>
            <TabContainer
              style={{
                padding: "24px",
                paddingBottom: "28px",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "85%" }}>
                <QVCompany className="twentyFourFont">{name}</QVCompany>
                <QVTitle className="eighteenFont">{industry}</QVTitle>

                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <Col style={{ alignItems: "flex-start" }}>
                    <QVCompany
                      className="eighteenFont"
                      style={{
                        marginTop: "10px",
                        fontWeight: "500",
                      }}
                    >
                      Description
                    </QVCompany>

                    <QVCaption
                      className="sixteenFont"
                      style={{ marginTop: "4px" }}
                    >
                      {description}
                    </QVCaption>
                  </Col>

                  <Image
                    src={image}
                    alt="Company Visual"
                    className="companyIMG"
                  />
                </Row>

                <Row
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ alignSelf: "flex-start" }}>
                    <QVCompany
                      className="eighteenFont"
                      style={{ fontWeight: "500" }}
                    >
                      Location
                    </QVCompany>
                    <QVCaption className="sixteenFont">
                      {location.charAt(0).toUpperCase() + location.slice(1)}
                    </QVCaption>
                  </div>

                  <div className="break"></div>

                  <div className="add-company-button-group">
                    <Link
                      to={`/dashboard/add-companies/company-information/${companyid}`}
                    >
                      <Button
                        style={{ marginTop: "12px", marginRight: "1vw" }}
                        className="button-style eighteenFont"
                      >
                        More Details
                      </Button>
                    </Link>
                    <Button
                      className="button-style eighteenFont"
                      type="primary"
                      onClick={this.addCompany}
                    >
                      Add
                    </Button>
                  </div>
                </Row>
              </div>
            </TabContainer>
          </div>
        ))}
      </>
    );
  }
}
