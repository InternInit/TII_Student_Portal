import React, { Component } from "react";
import styled from "styled-components";
import "../App.scss";
import { Link } from "react-router-dom";
const FooterContainer = styled.div`
  background-color: #00204a;
  width: 100%;
  min-height: 200px;

  display: flex;

  flex-direction: column;

  align-items: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const textStyle = {
  textAlign: "left",
  color: "white",
};

class TiiFooter extends Component {
  render() {
    return (
      <FooterContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "80%",
            marginTop: "35px",
          }}
        >
          <Col>
            <div style={textStyle} className="eighteenFont bold">
              Navigate
            </div>
            <Link to="/dashboard" style={textStyle} className="fourteenFont">
              Dashboard
            </Link>
            <Link to="/apply" style={textStyle} className="fourteenFont">
              Apply
            </Link>
            <Link to="/edit-profile" style={textStyle} className="fourteenFont">
              Edit Profile
            </Link>
          </Col>
          <Col>
            <div style={textStyle} className="eighteenFont bold">
              Resources
            </div>
            <Link to="/how-to-apply" style={textStyle} className="fourteenFont">
              How to Apply
            </Link>
            <Link
              to="/frequently-asked-questions"
              style={textStyle}
              className="fourteenFont"
            >
              FAQ
            </Link>
            <Link
              to="/dashboard/apply-skills"
              style={textStyle}
              className="fourteenFont"
            >
              Apply Skills
            </Link>
          </Col>

          <Col>
            <div style={textStyle} className="eighteenFont bold">
              Connect
            </div>
            <span style={textStyle} className="fourteenFont">
              <a href="mailto:contact-us@interninit.com">
                <div class="noColorLink">Email</div>
              </a>
            </span>
            <span style={textStyle} className="fourteenFont">
              <a href="https://www.instagram.com/internshipinitiative/">
                <div class="noColorLink">Instagram</div>
              </a>
            </span>
            <span style={textStyle} className="fourteenFont">
              <a href="https://www.linkedin.com/company/the-internship-initiative-llc">
                <div class="noColorLink">LinkedIn</div>
              </a>
            </span>
          </Col>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={textStyle} className="sixteenFont">
            Created by The Internship Initiative LLC
          </span>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <span style={textStyle} className="fourteenFont">
            © The Internship Initiative LLC. All rights reserved.{" "}
          </span>
        </div>
      </FooterContainer>
    );
  }
}
export default TiiFooter;
