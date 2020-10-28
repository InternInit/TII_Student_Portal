//React Imports
import React, { Component } from "react";
import styled from "styled-components";
import "../../App.scss";
import "./dashboard.scss";

//Ant Design
import { Layout, Divider } from "antd";

//Custom Components
import DashboardNavBar from "./dashboardNavBar.jsx";
import AddCompanies from "./add-companies/AddCompanies";
import CompanyInformation from "./CompanyInformation.js";
import ApplySkills from "./apply-skills/applySkills";
import MyInternships from "./my-internships/myInternships";

//React Routing
import { Route, Switch as ReactSwitch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import {
  updateCheckedIndustries,
  updateDisabledIndustries,
  addPinnedBusiness,
  removePinnedBusiness,
  addActiveApp,
} from "../../redux/actions";

const PageContainer = styled.div`
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  margin: auto;
  margin-top: 2%;
`;

const WelcomeHeader = styled.h1`
  text-align: center;
  font-family: Lato;
  font-weight: bold;
  margin-ottom: 3%;

  color: #112d4e;
`;

const { Content } = Layout;

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    completionState: state.completionState,
  };
};

const mapDispatchToProps = {
  updateCheckedIndustries,
  updateDisabledIndustries,
  addPinnedBusiness,
  removePinnedBusiness,
  addActiveApp,
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
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
              backgroundColor: "#EBEFF2",
              minHeight: "100vh",

              minWidth: "610px",
            }}
          >
            <PageContainer>
              <WelcomeHeader className="fortyEightFont">
                Welcome, {this.props.userInfo.displayName}!
              </WelcomeHeader>
              <DashboardNavBar version={this.props.userInfo.version} />
              <Divider
                style={{ backgroundColor: "#d4dadd", marginTop: "15px" }}
              />
              <ReactSwitch>
                <Route
                  path="/dashboard"
                  exact
                  render={() => {
                    return <Redirect to="/dashboard/my-internships" />;
                  }}
                />

                <Route path="/dashboard/my-internships" exact>
                  <MyInternships
                    updateBusinessStatus={this.props.updateBusinessStatus}
                    disassociatePinnedBusiness={
                      this.props.disassociatePinnedBusiness
                    }
                    removePinnedBusiness={this.props.removePinnedBusiness}
                    addActiveApp={this.props.addActiveApp}
                  />
                </Route>

                <Route
                  path="/dashboard/add-companies"
                  exact
                  render={() => (
                    <AddCompanies
                      version={this.props.userInfo.version}
                      updateBusinessStatus={this.props.updateBusinessStatus}
                      pinnedBusinesses={this.props.userInfo.pinnedBusinesses}
                      addPinnedBusiness={this.props.addPinnedBusiness}
                      activeApplications={
                        this.props.userInfo.activeApplications
                      }
                      addActiveApp={this.props.addActiveApp}
                      updateData={this.props.updateData}
                      checkedIndustries={this.props.userInfo.checkedIndustries}
                      updateCheckedIndustries={
                        this.props.updateCheckedIndustries
                      }
                      disabledIndustries={
                        this.props.userInfo.disabledIndustries
                      }
                      updateDisabledIndustries={
                        this.props.updateDisabledIndustries
                      }
                    />
                  )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
