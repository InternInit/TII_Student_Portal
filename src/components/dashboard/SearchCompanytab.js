import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import { Link } from 'react-router-dom'
import { Button, Avatar } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

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

const TabContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 5px;
  //border: solid 0.5px #d9d9d9;
  background-color: white;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 5px -4px;
  :hover {
    transition-duration: 0.35s;
    cursor: pointer;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
  }
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
                <Avatar size={36} shape="square" icon={<TeamOutlined />} src={logo} style={{ marginLeft: '8%', marginBottom: '14px' }} />

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
                    <Button className='button-style' type='primary'>Add</Button>

                    <Link to={`/dashboard/add-companies/company-information/${companyid}`}>
                      <Button style={{ marginTop: '12px', }} className='button-style'>
                        More Details
                    </Button>
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
