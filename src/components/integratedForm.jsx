import React, { Component } from "react";

import styled from "styled-components";

import PageInternshipInformation from "../components/pageInternshipInformation.jsx";
import PageReference from "../components/pageReferences.jsx";
import PagePersonal from "../components/pagePersonal.jsx";
import PageEssays from "./pageEssays";

//React Routing
import { BrowserRouter as Router, Link, Route, Switch as ReactSwitch } from 'react-router-dom'

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
    const { page, onNext, onBack, onSubmit, getJwt, uploadFile, getUserData } = this.props;


    //Rerenders the form based on what page the user is currently on
    return (
      <PageContainer>
        <Router>
          <ReactSwitch>
            <Route path='/Internship-Information'
              render={(props) => <PageInternshipInformation {...props} uploadFile={uploadFile} />} />
            <Route path='/Personal'
              render={(props) => <PagePersonal {...props} uploadFile={uploadFile} />} />
            <Route path='/Written-Work'
              render={(props) => <PageEssays {...props} uploadFile={uploadFile} />} />
            <Route path='/References'
              render={(props) => <PageReference {...props} uploadFile={uploadFile} />} />
          </ReactSwitch>
        </Router>
      </PageContainer>
    )
  }
}

export default IntegratedForm;
