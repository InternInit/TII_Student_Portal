import React, { Component, useEffect } from "react";

//Logo Import
import logo from "./logo.svg";

//Ant Design Imports
import { Layout, Menu, Switch, Button } from "antd";

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



class App extends Component {
  inMemoryToken;

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
          "Authorization": "Bearer " + JSON.stringify(this.inMemoryToken.token),
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
          "Authorization": "Bearer " + JSON.stringify(this.inMemoryToken.token),
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

  auth = () => {
    try{
      var authCode = window.location.href.split("?")[1].split("=")[1]
      fetch("/auth", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: authCode
        }).then(response =>
          response.json()).then(data => {
            if(data!=="Invalid Grant"){
              data = JSON.parse(data)

              this.inMemoryToken = {
                token: data.id_token,
                expiry: data.expires_in,
                refresh: data.refresh_token
              }
              console.log(this.inMemoryToken)
            } else {
              window.location.href = "https://auth.interninit.com/login?response_type=code&client_id=3og5ph16taqf598bchokdfs1r2&redirect_uri=http://localhost:3000"
            }

          });
    } catch(e){
      window.location.href = "https://auth.interninit.com/login?response_type=code&client_id=3og5ph16taqf598bchokdfs1r2&redirect_uri=http://localhost:3000"
    }

  }

  refresh = () => {
    fetch("/auth/refresh").then(response =>
        response.json()).then(data => {
          if(data == null){
            //Exchange Auth
            //Store JWT in memory
            //Store Refresh Token
            this.auth();
          } else {
            //Check for JWT
            if(typeof this.inMemoryToken == "undefined"){
              console.log("I should probably exchange refresh for JWT")
              this.exchange();
            } else {
              console.log("JWT exists, yay")
            }
          }
        });
  }

  exchange = () => {
    console.log("Exchanging")
    fetch("/auth/exchange").then(response =>
      response.json()).then(data => {
        data = JSON.parse(data)

        this.inMemoryToken = {
          token: data.id_token,
          expiry: data.expires_in,
          refresh: data.refresh_token
        }
        console.log(this.inMemoryToken)
      });
  }

  logout = () => {
    fetch("/logout").then(response =>
        response.json()).then(data => {
          console.log(typeof data);
          window.location.href = data
        });


  }

  getJwt = () => {
    console.log(this.inMemoryToken);
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

  componentDidMount() {
    console.log("mounted");
    this.refresh();
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch checkedChildren="Submission On" unCheckedChildren="Submission Off" onChange={this.onChange}></Switch>
        <Button onClick={this.getJwt}>GetJWT</Button>
        <Button onClick={this.logout}>Logout</Button>
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
