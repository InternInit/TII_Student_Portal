import React, { Component } from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../App.scss";

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
    this.setState({ width: '100vh', height: '100vh' });
  }

  render() {
    const { width, height } = this.state;
    return (
      <PageContainer>
        <Confetti
          minHeight={height}
          initialVelocity={20}
          recycle={false}
          numberOfPieces={500}
        />
        <SubmissionHeading>You Did It!</SubmissionHeading>
        <p>
          Congratulations! Give yourself a pat on the back. You deserve it. You
          just finished your internship application.
        </p>
        <br />
        <p>
          To move forward, check out the{" "}
          <Link to="/dashboard/add-companies">
            <em>Add Companies</em>
          </Link>{" "}
          tab on your dashboard to start sending your application to any company
          that you're interested in.
        </p>
        <br />
        <p>Once again, congratulations and good luck!</p>
        <br />
        <ButtonContainer>
          <Link to="/dashboard/add-companies">
            <Button type="primary" style={{ marginBottom: "40%" }}>
              Return to Home
            </Button>
          </Link>
        </ButtonContainer>
      </PageContainer>
    );
  }
}

export default SubmissionSuccess;
