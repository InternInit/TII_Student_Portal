import React, { Component } from "react";
import DashboardNavBar from "./dashboardNavBar.jsx";
import ApplicationProgress from "./applicationProgress.jsx";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import { Layout, Switch, Button } from "antd";

import Companytab from './Companytab.js'

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
  margin-bottom: 2%;

  color: #0050b3;
`;

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
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
              <ApplicationProgress />


            </PageContainer>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Dashboard;
