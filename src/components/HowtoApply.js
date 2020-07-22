import React from "react";
import styled from "styled-components";
import Internshipimg from "../How_To_Apply/internshipinfo.JPG";
import Personalimg from "../How_To_Apply/personal.JPG";
import Writtenimg from "../How_To_Apply/written.JPG";
import Referencesimg from "../How_To_Apply/reference.JPG";
import { CheckOutlined } from "@ant-design/icons";
//styles
import { withRouter } from "react-router-dom";

import { Menu, Dropdown, Layout } from "antd";

const Banner = styled.div`
  background-color: #8fc3d1;
  padding: 55px;
  font-size: 36px;
  color: white;
  font-weight: normal;
`;
const Heading = styled.div`
  font-size: 28px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: bold;
  display: flex;
  justify-content: align-left;
  margin-top: 70px;
`;
const Text = styled.div`
  padding: 5px;
  font-weight: normal;
  display: flex;
  width: 90%;
  font-size: 18px;
  justify-content: align-left;
  padding-left: 30px;
`;
const Bullet = styled.div`
  font-weight: normal;
  display: flex;
  font-size: 18px;
  justify-content: align-left;
  padding-left: 50px;
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
  padding: 20px;
  font-weight: normal;
  display: flex;
  font-size: 18px;
  justify-content: align-left;
  width: 90%;
`;

const { Content, Sider, Header } = Layout;

const jumpTo = (
  <Menu
    className
    style={{
      display: "flex",
      flexDirection: "column",
      width: "300px"
    }}
  >
    <Menu.Item
      style={{
        fontSize: "16px",
        fontWeight: "500"
      }}
    >
      Internship Information
    </Menu.Item>
    <Menu.Item>Personal Information</Menu.Item>
    <Menu.Item>Written Work</Menu.Item>
    <Menu.Item>References</Menu.Item>
  </Menu>
);

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
      <Layout>
        <Header
          style={{
            backgroundColor: " #8fc3d1",
            paddingTop: "55px",
            paddingBottom: "55px",
            fontSize: "36px",
            color: "white",
            fontWeight: "normal",
            height: "180px"
          }}
        >
          How to Apply
        </Header>
        <Layout>
          <Content
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#F5F5F5"
            }}
          >
            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10%"
              }}
            >
              {/**Jump to Section */}
              <Heading
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "35px"
                }}
              >
                Jump to Section
              </Heading>
              <Menu
                mode="horizontal"
                selectedKeys="5"
                style={{
                  backgroundColor: "#F5F5F5",
                  border: "0"
                }}
              >
                <Menu.Item
                  style={{
                    fontSize: "18px",
                    fontWeight: "500"
                  }}
                  onClick={() => {
                    window.scrollTo(0, this.Internref.current.offsetTop);
                  }}
                >
                  Internship Information
                </Menu.Item>
                <Menu.Item
                  style={{
                    fontSize: "18px",
                    fontWeight: "500"
                  }}
                  onClick={() => {
                    window.scrollTo(0, this.Personalref.current.offsetTop);
                  }}
                >
                  Personal Information
                </Menu.Item>
                <Menu.Item
                  style={{
                    fontSize: "18px",
                    fontWeight: "500"
                  }}
                  onClick={() => {
                    window.scrollTo(0, this.Writtenref.current.offsetTop);
                  }}
                >
                  Written Work
                </Menu.Item>
                <Menu.Item
                  style={{
                    fontSize: "18px",
                    fontWeight: "500"
                  }}
                  onClick={() => {
                    window.scrollTo(0, this.Referenceref.current.offsetTop);
                  }}
                >
                  References
                </Menu.Item>
              </Menu>

              <Heading>It's Simple!</Heading>
              <Text>
                Fill out the information form found on the 'Apply' tab. When
                filling out the form, make sure to:
              </Text>

              <Bullet>
                - Be specific, give us as much information as you can.
              </Bullet>
              <Bullet>
                - Make sure to fill out all the necessary forms so we can
                fulfill company requirements
              </Bullet>
              <Bullet>- Be honest, write about yourself</Bullet>
              <Bullet>- Submit when everything is filled out!</Bullet>

              {/**Things you will Need */}
              <Heading style={{ marginTop: "90px" }}>Things you need</Heading>
              <Text>
                In order to apply, make sure you have the following information:
              </Text>
              <Bullet style={{ marginTop: "15px" }}>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Weighted and Unweighted Grade Point Average (GPA)
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                List of interested industries (Ie. Finance or Biotechnology)
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                List of relevant courses taken
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                List of extracurricular activities
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Year of Graduation (Must be at least a high school Sophomore to
                high school Senior)
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Availability to work
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Resumé or CV
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                List Item
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Cover Letter (Optional)
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Letters of Recommendation (1 required, but 2 is advised)
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                Transcript
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                School Profile
              </Bullet>
              <Bullet>
                <CheckOutlined
                  style={{ color: "green", paddingRight: "10px" }}
                />
                List of Accomplishments/Achievements
              </Bullet>

              {/**Internship Information */}
              <Heading ref={this.Internref}>Internship Information</Heading>
              <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                <Image src={Internshipimg} alt="internshipinfo" />
              </div>
              <Caption>
                This is where you will fill out information regarding your
                preferences and desires in internships. For example, if you
                wanted to apply for a company in the Real Estate industry or can
                only work on certain days, this is where you would state that
                information.
              </Caption>

              {/**Personal Information */}
              <Heading ref={this.Personalref}>Personal Information</Heading>
              <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                <Image src={Personalimg} alt="Personal" />
              </div>
              <Caption>
                In the 'General Information' tab, you will give us personal
                information about yourself. This includes, gender, race, and
                educational history. Please note that you do not have to fill
                out any information if you are not comfortable doing so, but it
                could hinder your application's reach after submission.
              </Caption>

              {/**Written Work */}
              <Heading ref={this.Writtenref}>Written Work</Heading>
              <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                <Image src={Writtenimg} alt="Personal" />
              </div>
              <Caption>
                Please will tell us more about yourself! Let us know why a
                company should give you an intern, and what you would bring to
                their facility. Remember to be specific and answer in complete
                sentences. It is also where you will give us additional
                information that could be useful.
              </Caption>

              {/**References */}
              <Heading ref={this.Referenceref}> References </Heading>
              <div style={{ backgroundColor: "#ededed", width: "100%" }}>
                <Image src={Referencesimg} alt="Personal" />
              </div>
              <Caption>
                This is what our reference tab looks like. Here, you can add or
                delete references as you please. A reference could be someone
                you worked with in the past, or a trusted adult. They serve to
                give us information regarding your past work experience, and
                vouche for you to hiring companies.
              </Caption>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
  routeChange = path => {
    this.props.history.push(path);
  };
}
export default withRouter(HowtoApply);
