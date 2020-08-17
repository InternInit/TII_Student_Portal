//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";

//Ant Design
import { Layout } from "antd";

//Custom Components
import DashboardNavBar from "./dashboardNavBar.jsx";
import AddCompanies from "./AddCompanies.js";
import CompanyInformation from "./CompanyInformation.js";
import ApplicationProgress from "./applicationProgress.jsx";
import ApplySkills from "./apply-skills/applySkills";

//React Routing
import { Route, Switch as ReactSwitch, Redirect } from "react-router-dom";

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

const { Content } = Layout;

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
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
              <WelcomeHeader>Welcome {this.props.userInfo.username}</WelcomeHeader>
              <DashboardNavBar version={this.props.userInfo.version} />
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
                  <ApplicationProgress />
                  <PinCompany pinnedBusinesses={this.props.userInfo.pinnedBusinesses} updateBusinessStatus={this.props.updateBusinessStatus}/>
                  <ActiveApplications activeApplications={this.props.userInfo.activeApplications}/>
                </Route>

                <Route
                  path="/dashboard/add-companies"
                  exact
                  render={() => <AddCompanies version={this.props.userInfo.version} updateBusinessStatus={this.props.updateBusinessStatus}/>}
                />

                <Route
                  path="/dashboard/add-companies/company-information/:companyid"
                  exact
                  component={CompanyInformation}
                />

                <Route path="/dashboard/apply-skills">
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
