//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";

//Ant Design
import { Layout, Switch, Button } from "antd";

//Custom Components
import DashboardNavBar from "./dashboardNavBar.jsx";
import AddCompanies from "./AddCompanies.js";
import CompanyInformation from "./CompanyInformation.js";
import Companytab from "./Companytab.js";
import ApplicationProgress from "./applicationProgress.jsx";
import ApplySkills from "./apply-skills/applySkills";
import NewStudent from "../newStudent";

//React Routing
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch as ReactSwitch,
  Redirect,
  useRouteMatch as match,
  useParams
} from "react-router-dom";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import ActiveApplications from "./ActiveApplications";
import PinCompany from "./PinCompany";

const PageContainer = styled.div`
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  margin: auto;
  margin-top: 2%;
`;

const WelcomeHeader = styled.h1`
  text-align: center;
  font-size: 72px;
  font-family: Lato;
  font-weight: bold;
  margin-ottom: 3%;

  color: #0050b3;
`;

const { Header, Content, Footer, Sider } = Layout;

const mapStateToProps = state => {
  return {
    completionState: state.completionState
  };
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Content
            style={{
              display: "flex",
              padding: "30px",
              justifyContent: "center",
              backgroundColor: "#F5F5F5",
              minHeight: "100vh"
            }}
          >
            <PageContainer>
              <WelcomeHeader>Welcome Kevin</WelcomeHeader>
              <DashboardNavBar />
              <hr />
              <ReactSwitch>
                <Route
                  path="/dashboard"
                  exact
                  render={() => {
                    return <Redirect to="/dashboard/my-internships" />;
                  }}
                />

                <Route path="/dashboard/my-internships" exact>
                  <NewStudent />
                  <ApplicationProgress />
                  <PinCompany />
                  <ActiveApplications />
                </Route>

                <Route
                  path="/dashboard/add-companies"
                  exact
                  component={AddCompanies}
                />

                <Route
                  path="/dashboard/add-companies/company-information/:companyid"
                  exact
                  component={CompanyInformation}
                />

                <Route exact path="/dashboard/apply-skills">
                  <ApplySkills />
                </Route>

                {/**
                 *
                 * Handles Invalid URL
                 *
                 */}
                <Route
                  path="/dashboard/*"
                  render={() => {
                    return <Redirect to="/dashboard/my-internships" />;
                  }}
                />
              </ReactSwitch>
            </PageContainer>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
