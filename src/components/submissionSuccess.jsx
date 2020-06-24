import React, { Component } from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "../App.css";

//Styles
const PageContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 5%;
`;

const SubmissionHeading = styled.h1`
  font-size: 36px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
class SubmissionSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { width, height } = this.state;
    return (
      <PageContainer>
        <Confetti
          width={width}
          height={height}
          initialVelocity={20}
          recycle={false}
          numberOfPieces={500}
        />
        <SubmissionHeading>You Did It!</SubmissionHeading>
        <p>
          Congratulations! Give yourself a pat on the back. You deserve it. Your
          application was sent to all the available internship openings in the
          industries you selected.
        </p>
        <br />
        <p>
          If your application is selected from our database, your information
          will be provided to the businesses that you qualify for. If the
          business expresses interest in your application, they will reach out
          from there.
        </p>
        <br />
        <p>Once again, congratulations and good luck!</p>
        <br />
        <ButtonContainer>
          <Button type="primary" href="https://interninit.com">
            Return to Home
          </Button>
        </ButtonContainer>
      </PageContainer>
    );
  }
}

export default SubmissionSuccess;
