import React, { Component } from "react";

import styled from "styled-components";

import PageInternshipInformation from "../components/pageInternshipInformation.jsx";
import PageReference from "../components/pageReferences.jsx";
import PagePersonal from "../components/pagePersonal.jsx";
import PageEssays from "./pageEssays";

//Styles
const PageContainer = styled.div`
  display: flex;
  width: 60%;
  justifycontent: center;
`;

class IntegratedForm extends Component {
  state = {
    internshipInformation: {
      firstName: "porridge",
      lastName: "",
      phone: null,
      email: "",
      addressLine: "",
      city: "",
      usState: "",
      zipcode: "",
      yearOfGraduation: null,
      industry: "",
      unweightedGPA: null,
      weightedGPA: null,
      courses: "",
      Extracurriculars: "",
      daysToWork: null,
      timesToWork: null,
      dateOfStartAndEnd: null,
      paidUnpaid: null,
      resume: null
    }
  };

  render() {
    const { page } = this.props;

    //Rerenders the form based on what page the user is currently on
    if (page === 0) {
      return (
        <PageContainer>
          <PageInternshipInformation
            onNext={this.props.onNext}
            submit={this.submit}
          />
        </PageContainer>
      );
    } else if (page === 1) {
      return (
        <PageContainer>
          <PagePersonal onNext={this.props.onNext} onBack={this.props.onBack} />
        </PageContainer>
      );
    } else if (page === 2) {
      return (
        <PageContainer>
          <PageEssays onNext={this.props.onNext} onBack={this.props.onBack} />
        </PageContainer>
      );
    } else if (page === 3) {
      return (
        <PageContainer>
          <PageReference onBack={this.props.onBack} />
        </PageContainer>
      );
    }
  }
}

export default IntegratedForm;
