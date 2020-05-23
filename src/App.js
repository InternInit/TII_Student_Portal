import React, { Component, useEffect } from "react";

//Logo Import
import logo from "./logo.svg";

//Ant Design Imports
import { Layout, Menu, Switch } from "antd";

//Styled Component Imports
import styled from "styled-components";

//Custom Component Imports
import IntegratedForm from "./components/integratedForm.jsx";
import Navbar from "./components/navbar.jsx";
import TiiNav from "./components/TiiNav.jsx";
import PagePersonal from "./components/pagePersonal.jsx";
import PageInternshipInformation from "./components/pageInternshipInformation.jsx";

//CSS Imports
import "./App.css";

//Declarations
const { Header, Content, Footer, Sider } = Layout;

//Misc JSON Testing
const payload = {"abc" : "123"};

class App extends Component {
  state = {
    page: 0,
    submissionState: false
  };

  onNext = (values, origin) => {
    const newPage = this.state.page + 1;
    this.setState({
      page: newPage
    });

    if (this.state.submissionState == true){
      fetch("/update_user_data", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify(values) + "#" + origin
        }).then(response =>
          response.json()).then(data => {
            console.log(data);
          });
    } else if (this.state.submissionState == false) {
      console.log("Submission disabled")
    }

  };

  onBack = () => {
    const newPage = this.state.page - 1;
    this.setState({
      page: newPage
    });
  };

  onSubmit = (values, origin) => {
    if(this.state.submissionState == true){
      fetch("/update_user_data", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify(values) + "#" + origin
        }).then(response =>
          response.json()).then(data => {
            console.log(data);
          });
    } else if (this.state.submissionState == false) {
      console.log("Submission disabled")
    }

  };

  clickOne = () => {
    this.setState({ page: 0 });
  };

  clickTwo = () => {
    this.setState({ page: 1 });
  };

  clickThree = () => {
    this.setState({ page: 2 });
  };

  clickFour = () => {
    this.setState({ page: 3 });
  };

  renderPage = () => {
    const pageNumber = this.state.page;
    return (
      <IntegratedForm
        page={pageNumber}
        onNext={this.onNext}
        onBack={this.onBack}
        onSubmit={this.onSubmit}
      />
    );
  };

  onChange = checked => {
    this.state.submissionState = checked;
    console.log(this.state.submissionState)
  }

  // BUG: PROBLEM WITH RENDERING THE DIFFERENT NAVBAR SELECTIONS
  renderNav = () => {
    const highlightKey = String([this.state.page + 1]);
    return (
      <TiiNav
        clickOne={this.clickOne}
        clickTwo={this.clickTwo}
        clickThree={this.clickThree}
        clickFour={this.clickFour}
        highlightKey={highlightKey}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <header>
          <Navbar /> <Switch checkedChildren="Submission On" unCheckedChildren="Submission Off" onChange={this.onChange}></Switch>
        </header>
        <Layout>
          {this.renderNav()}
          <Content
            style={{
              display: "flex",
              padding: "30px",
              justifyContent: "center",
              backgroundColor: "#ededed",
              minHeight: "100vh"
            }}
          >
            {this.renderPage()}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
