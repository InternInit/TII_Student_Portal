import React from "react";
import styled from "styled-components";
import Internshipimg from "../../How_To_Apply/internshipinfo.JPG";
import Personalimg from "../../How_To_Apply/personal.JPG";
import Writtenimg from "../../How_To_Apply/written.JPG";
import Referencesimg from "../../How_To_Apply/reference.JPG";
import { CheckOutlined } from "@ant-design/icons";
import { BsApp } from "react-icons/bs";

//styles
import { withRouter } from "react-router-dom";

import { Layout, Row as AntRow, Col as AntCol } from "antd";

import "../../App.scss";
import "./FAQAndHowToApply.scss";

const Heading = styled.span`
  font-weight: bold;
  font-family: Lato;
  padding-bottom: 3%;
`;

const Text = styled.span`
  padding: 5px;
  font-weight: normal;
  display: flex;
  width: 90%;
  padding-left: 30px;

  text-align: left;
`;
const Bullet = styled.span`
  font-weight: normal;
  display: flex;
  padding-left: 50px;

  text-align: left;
`;
const Image = styled.img`
  border-radius: 20px;
  padding: 30px;
  width: 70%;
  height: 70%;
  object-fit: scale-down;
  pointer-events: none;
`;
const Caption = styled.p`
  padding-top: 20px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  width: 90%;

  align-self: center;
`;

const { Content, Header } = Layout;

//THIS IS BEING TESTED INSTEAD OF INTERNSHIPINFORMATION, MAKE SURE TO CHANGE ROUTE BACK WHEN FINISHED!

class HowtoApply extends React.Component {
  constructor(props) {
    super(props);

    this.Internref = React.createRef();
    this.Personalref = React.createRef();
    this.Writtenref = React.createRef();
    this.Referenceref = React.createRef();

    this.routeChange = this.routeChange.bind(this);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="Banner">
          <span className="Header">How to Apply</span>
        </div>
        <Layout>
          <Content
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#EBEFF2",
            }}
          >
            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10%",
              }}
            >
              <AntRow gutter={[16, 32]} style={{ marginTop: "30px" }}>
                <AntCol span={24}>
                  <div className="how-to-apply-intro-container">
                    <Heading className="twentyEightFont main-header">
                      It's Simple!
                    </Heading>
                    <Text className="eighteenFont">
                      Fill out the information form found on the 'Apply' tab.
                      When filling out the form, make sure to:
                    </Text>

                    <ul className="how-to-apply-list eighteenFont text-left">
                      <li>
                        Be specific, give us as much information as you can.
                      </li>
                      <li>
                        Make sure to fill out all the necessary forms so we can
                        fulfill company requirements
                      </li>
                      <li> Be honest, write about yourself</li>
                      <li>Submit when everything is filled out!</li>
                    </ul>
                  </div>
                </AntCol>

                {/**Things you will Need */}
                <AntCol span={24}>
                  <div className="how-to-apply-intro-container">
                    <Heading className="twentyEightFont main-header">
                      Things You'll Need
                    </Heading>
                    <Text className="eighteenFont">
                      In order to apply, make sure you have the following
                      information:
                    </Text>

                    <ul className="how-to-apply-list eighteenFont text-left">
                      <li>Weighted and Unweighted Grade Point Average (GPA)</li>
                      <li>
                        List of interested industries (Ie. Finance or
                        Biotechnology)
                      </li>
                      <li>List of relevant courses taken</li>
                      <li>List of extracurricular activities</li>
                      <li>
                        Year of Graduation (Must be at least a high school
                        Sophomore to high school Senior)
                      </li>
                      <li>Availability to work</li>
                      <li>Resumé or CV</li>
                      <li>List Item</li>
                      <li>Cover Letter (Optional)</li>
                      <li>
                        Letters of Recommendation (1 <em>highly</em>{" "}
                        recommended, but 2 is advised)
                      </li>
                      <li>Transcript</li>
                      <li>School Profile</li>
                      <li>List of Accomplishments/Achievements</li>
                    </ul>
                  </div>
                </AntCol>

                {/**Internship Information */}
                <AntCol span={24}>
                  <div className="how-to-apply-intro-container">
                    <Heading className="twentyEightFont main-header">
                      Ace Your Application
                    </Heading>
                    <Heading
                      ref={this.Internref}
                      className="twentyTwoFont how-to-apply-sub-heading"
                    >
                      Internship Information
                    </Heading>
                    <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                      <Image src={Internshipimg} alt="internshipinfo" />
                    </div>
                    <Caption className="eighteenFont">
                      This is where you will fill out information regarding your
                      preferences and desires in internships. For example, if
                      you wanted to apply for a company in the Real Estate
                      industry or can only work on certain days, this is where
                      you would state that information.
                    </Caption>

                    {/**Personal Information */}
                    <Heading
                      ref={this.Personalref}
                      className="twentyTwoFont how-to-apply-sub-heading"
                    >
                      Personal Information
                    </Heading>
                    <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                      <Image src={Personalimg} alt="Personal" />
                    </div>
                    <Caption className="eighteenFont">
                      In the 'General Information' tab, you will give us
                      personal information about yourself. This includes,
                      gender, race, and educational history. Please note that
                      you do not have to fill out any information if you are not
                      comfortable doing so, but it could hinder your
                      application's reach after submission.
                    </Caption>

                    {/**Written Work */}
                    <Heading
                      ref={this.Writtenref}
                      className="twentyTwoFont how-to-apply-sub-heading"
                    >
                      Written Work
                    </Heading>
                    <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                      <Image src={Writtenimg} alt="Personal" />
                    </div>
                    <Caption className="eighteenFont">
                      Please will tell us more about yourself! Let us know why a
                      company should give you an intern, and what you would
                      bring to their facility. Remember to be specific and
                      answer in complete sentences. It is also where you will
                      give us additional information that could be useful.
                    </Caption>

                    {/**References */}
                    <Heading
                      ref={this.Referenceref}
                      className="twentyTwoFont how-to-apply-sub-heading"
                    >
                      References
                    </Heading>
                    <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                      <Image src={Referencesimg} alt="Personal" />
                    </div>
                    <Caption className="eighteenFont">
                      This is what our reference tab looks like. Here, you can
                      add or delete references as you please. A reference could
                      be someone you worked with in the past, or a trusted
                      adult. They serve to give us information regarding your
                      past work experience, and vouche for you to hiring
                      companies.
                    </Caption>
                  </div>
                </AntCol>
              </AntRow>
            </div>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
  routeChange = (path) => {
    this.props.history.push(path);
  };
}
export default withRouter(HowtoApply);
