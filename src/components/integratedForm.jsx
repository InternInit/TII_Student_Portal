import React, { Component } from "react";

import styled from "styled-components";

import PageInternshipInformation from "../components/pageInternshipInformation.jsx";
import PageReference from "../components/pageReferences.jsx";
import PagePersonal from "../components/pagePersonal.jsx";
import PageEssays from "./pageEssays";

//Styles
const PageContainer = styled.div`
  display: flex;
  width: 70%;
  padding-left: 5%;
  padding-right: 5%;
  justifycontent: center;
  background-color: white;
  border-radius: 10px;
`;

class IntegratedForm extends Component {
  render() {
    const { page, onNext, onBack, onSubmit, getJwt, uploadFile, getUserData} = this.props;


    //Rerenders the form based on what page the user is currently on
    if (page === 0) {
      return (
        <PageContainer>
          <PageInternshipInformation onNext={onNext} getJwt={getJwt} uploadFile={uploadFile}/>
        </PageContainer>
      );
    } else if (page === 1) {
      return (
        <PageContainer>
          <PagePersonal onNext={onNext} onBack={onBack} getJwt={getJwt} />
        </PageContainer>
      );
    } else if (page === 2) {
      return (
        <PageContainer>
          <PageEssays onNext={onNext} onBack={onBack} getJwt={getJwt} uploadFile={uploadFile} />
        </PageContainer>
      );
    } else if (page === 3) {
      return (
        <PageContainer>
          <PageReference onBack={onBack} onSubmit={onSubmit} getJwt={getJwt} />
        </PageContainer>
      );
    }
  }
}

export default IntegratedForm;
