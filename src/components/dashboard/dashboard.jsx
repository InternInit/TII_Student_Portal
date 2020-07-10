import React, { Component } from "react";
import DashboardNavBar from "./dashboardNavBar.jsx";
import ApplicationProgress from "./applicationProgress.jsx";
import styled from "styled-components";
import "../../App.css";
import "./dashboard.css";
import { Layout, Switch, Button } from "antd";

import AddCompanies from './AddCompanies.js'
import CompanyInformation from './CompanyInformation.js'
import Companytab from "./Companytab.js";

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
  constructor(props) {
    super(props);
    this.state = {
      info: ""
    }
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
              <Companytab />
              <DashboardNavBar />
              <AddCompanies />
            </PageContainer>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch('https://api.indeed.com/ads/apisearch?publisher=123412341234123&q=java+developer&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
      .then(response =>
        response.json().then(data => {
          this.setState({ info: data });
        })
      )
  }



}

export default Dashboard;
