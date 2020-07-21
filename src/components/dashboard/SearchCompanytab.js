import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import { Link } from 'react-router-dom'
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


const AddButton = styled.div`
  color: white;
  background-color: #1890FF;
  font-size: 18px;
  border-radius: 2px;
  width: 336px;
  height: 36px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 3px 1px #d9d9d9;
  :hover {
    cursor: pointer;
    background-color:#1683e9;
    color:#fafafa;
  }
`;

const MoreDetailsButton = styled.div`
  color: #434343;
  background-color: #BFBFBF;
  font-size: 18px;
  font-weight:500;
  border-radius: 2px;
  width: 336px;
  height: 36px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 3px 1px #d9d9d9;
  :hover {
    cursor: pointer;
    background-color:#b3b3b3;
  }
`;


const QVCompany = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #262626;
`;

const QVTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const QVCaption = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #262626;
  width: 80%;
  text-align: left;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
  height: 200px;
  background-color: blue;
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: fill;
  background-color: blue;
  margin-left: 8%;
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

class SearchCompanytab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let { name, industry, logo, image, description, location, companyid } = this.props;
    let { show } = this.state;
    let ctab = <CLabel
      name={name}
      industry={industry}
      logo={logo}
    />;

    if (show === true) {
      ctab = <QuickView
        name={name}
        industry={industry}
        image={image}
        description={description}
        location={location}
        companyid={companyid}
      />;
    }

    return (
      <div onClick={this.handleClick}>
        {/**Tab variable, is switched between quickview and standard */}
        {ctab}
      </div>
    );
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
    return (
      <QueueAnim type="scale" ease={["easeOutQuart", "easeInOutQuart"]}>
        {mapping.map((item, index) => (
          <div key={index}>
            <TabContainer>
              {/**Company Logo + Name + Position */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
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
                  <JobTitle style={{ paddingTop: "4px" }}>
                    {industry}
                  </JobTitle>
                </Col>
              </div>
            </TabContainer>
          </div>
        ))}
      </QueueAnim>
    );
  }
}

/*

Quick View of the Tab.
Gives additional Information when hovered over

*/
class QuickView extends React.Component {
  render() {
    let { name, industry, image, description, location, companyid } = this.props;
    return (
      <QueueAnim type="scale" ease={["easeOutQuart", "easeInOutQuart"]}>
        {mapping.map((item, index) => (
          <div key={index}>
            <TabContainer
              style={{
                padding: "24px",
                paddingBottom: '28px'
              }}
            >
              {/**
               *
               * Left Collumn
               *
               */}
              <Col
                style={{
                  alignItems: "flex-start",
                  marginLeft: "10%"
                }}
              >
                <QVCompany>{name}</QVCompany>
                <QVTitle>
                  {industry}
                </QVTitle>
                <QVCompany
                  style={{
                    marginTop: "10px",
                    fontWeight: "500"
                  }}
                >
                  Description
                </QVCompany>

                <QVCaption style={{ marginTop: "4px" }}>
                  {description.substring(0, 250) + '. . .'}
                </QVCaption>
              </Col>

              {/**
               *
               * Right Collumn
               *
               */}
              <Col
                style={{
                  alignItems: "flex-end",
                  marginRight: "10%",
                  width: "50%"
                }}
              >
                <Image src={image} alt="Company Visual" />

                <div
                  style={{
                    display: "flex",
                    marginTop: "5%",
                    justifyContent: "space-between",
                    marginRight: "5%"
                  }}
                >
                  <Col
                    style={{
                      marginRight: "5%"
                    }}
                  >
                    <QVCompany style={{ fontWeight: "500" }}>
                      Location
                    </QVCompany>
                    <QVCaption style={{ textAlign: "center", width: "150px" }}>
                      {location}
                    </QVCaption>
                  </Col>

                  <Col>
                    <AddButton>Add</AddButton>

                    <Link to={`/dashboard/add-companies/company-information/${companyid}`} style={{ color: '#434343' }}>
                      <MoreDetailsButton style={{ marginTop: '12px' }}>
                        More Details
                    </MoreDetailsButton>
                    </Link>

                  </Col>
                </div>
              </Col>
            </TabContainer>
          </div>
        ))}
      </QueueAnim>
    );
  }
}
