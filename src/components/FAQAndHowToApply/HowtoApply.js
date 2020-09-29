import React from "react";
import styled from "styled-components";
import Internshipimg from "../../How_To_Apply/internshipinfo.JPG";
import Personalimg from "../../How_To_Apply/personal.JPG";
import Writtenimg from "../../How_To_Apply/written.JPG";
import Referencesimg from "../../How_To_Apply/reference.JPG";

//styles
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

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
                      Getting Started
                    </Heading>
                    <Text className="eighteenFont">
                      Your application can be found on the&nbsp;
                      <Link to="/apply">Apply tab</Link>. When filling out your
                      application, make sure to:
                    </Text>

                    <ul className="how-to-apply-list eighteenFont text-left">
                      <li key="1">
                        Be specific. Tell us as much information as you can and
                        are comfortable with sharing.
                      </li>
                      <li key="2">
                        Be honest. The best strategy we have for you is to write
                        about who you really are. Stay true to yourself.
                      </li>
                      <li key="3">
                        Make sure to fill out all the <em>required</em> forms.
                        You will not be able to submit your application without
                        completing all required inputs. Required inputs have red
                        asterisks next to them.
                      </li>
                      <li key="4">
                        Submit your application on the last page of the
                        application when everything is filled out! You can
                        always go back and update/edit your application after
                        submitting.
                      </li>
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
                      <li key="1">Your weighted and unweighted GPAs</li>
                      <li key="2">
                        A list of industries you’re interested in. Click{" "}
                        <Link to="/frequently-asked-questions/#industry-offerings">
                          here
                        </Link>{" "}
                        to see the full list of industries we offer
                      </li>
                      <li key="3">
                        A list of any relevant courses you’ve taken you think
                        would help in a particular industry. For example, AP
                        Microeconomics would be helpful if interested in the
                        financial industry.
                      </li>
                      <li key="4">
                        A list of the extracurricular activities you’re involved
                        in. Be sure to know the months you joined, what you do
                        in the club, and how much time per week you spend on it
                        (on average).
                      </li>
                      <li key="5">Your expected Year of Graduation</li>
                      <li key="6">
                        Your work availability. How many hours per week and what
                        days will you be able to work?
                      </li>
                      <li key="7">
                        Resumé. Click{" "}
                        <Link to="/dashboard/apply-skills/what-should-i-include-on-my-resume">
                          here
                        </Link>{" "}
                        to learn how to make a resumé.
                      </li>
                      <li key="9">
                        A list of any leadership roles you’ve had, and what you
                        learned from them.
                      </li>
                      <li key="10">
                        At least one <em>non-family</em> member reference.
                      </li>
                    </ul>

                    <Text className="eighteenFont">Optional materials:</Text>
                    <ul className="how-to-apply-list eighteenFont text-left">
                      <li key="1">
                        Cover letter. Click{" "}
                        <Link to="/dashboard/apply-skills/cover-letter">
                          {" "}
                          here
                        </Link>{" "}
                        to learn how to write a cover letter.
                      </li>
                      <li key="2">Portfolio</li>
                      <li key="3">
                        Letters of Recommendation (1 <em>highly recommended</em>
                        , but 2 is advised)
                      </li>
                    </ul>
                  </div>
                </AntCol>

                {/**Internship Information */}
                <AntCol span={24}>
                  <div className="how-to-apply-intro-container">
                    <Heading className="twentyEightFont main-header">
                      Application Breakdown
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
                      This is where you will fill out information detailing the
                      basic personal contact information employers will use to
                      connect with you. This is also where you can share
                      school-related information, such as your GPA, courses
                      taken, and any extracurricular activities. You also can
                      share your “professional side” by uploading a resumé and
                      sharing any out-of-school extracurricular activities (in
                      the same extracurricular input box and/or in your resumé).
                      Lastly, this is the place to disclose when you’re
                      available to work. You can list days of the week,
                      time-of-day, and work dates that work for you.
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
                      This section is where employers determine your eligibility
                      to work based on your age and receive information to
                      comply with non-discriminatory employment laws. Lastly,
                      you can also share your educational history, such which
                      high school(s) you attended, and what subject(s) you
                      concentrated in. The information you provide here will not
                      be shared with anyone without your permission and
                      knowledge.
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
                      This section is to help bring out your character. Aside
                      from objective data like grades, employers also care about
                      who you are matters. After all, they don’t want to be
                      hiring robots, and we know all applicants have something
                      unique worth sharing. Here, we ask you to share which
                      industry(ies) are of particular interest to you and why.
                      We also ask you to share any leadership role(s) you’ve
                      had/have, and what you have learned from them. There are
                      no correct answers to these questions. Lastly, we offer
                      the opportunity for you to share anything else you think
                      recruiters should know about you. If you don’t have
                      anything to share, then don’t feel obligated to write
                      something. You can also submit an optional cover letter
                      and portfolio along with your application. Your written
                      responses to the prompts should be short essays no longer
                      than 1000 characters each.
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
                      This is the last section of the application. Here, you
                      tell us who can vouch for you. Before you list a
                      reference, be sure to ask them if they would mind being a
                      reference for you. Though we only require one reference,
                      feel free to list as many as you want. However, you should
                      only share additional references who can add new
                      perspectives about you. For example, you shouldn’t list
                      two of your math teachers who would share identical
                      descriptions about you. Employers may reach out to your
                      reference(s) to learn more about you.
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
