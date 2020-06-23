import React, { Component } from "react";

//Logo Import
import logo from "./logo.svg";

//Ant Design Imports
import { Layout, Switch, Button } from "antd";

//Styled Component Imports
import styled from "styled-components";

//Custom Component Imports
import Navbar from "./components/navbar.jsx";
import TiiNav from "./components/TiiNav.jsx";
import PagePersonal from "./components/pagePersonal.jsx";
import PageInternshipInformation from "./components/pageInternshipInformation.jsx";
import PageEssays from "./components/pageEssays";
import PageReferences from "./components/pageReferences";
import PageNotFound from "./components/pageNotFound";
import Dashboard from "./components/dashboard";
import HowtoApply from "./components/HowtoApply";
import SubmissionSuccess from "./components/submissionSuccess";

//CSS Imports
import "./App.css";

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

import pageInternshipInformation from "./components/pageInternshipInformation.jsx";

import configurationFile from "./configuration_dev.json"

//Declarations
const { Header, Content, Footer, Sider } = Layout;

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



class App extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.state = { wWidth: window.innerWidth, wHeight: window.innerHeight, isCollapsed: false, page: 0, submissionState: true, completionState: [false, false, false, false] }
  }

  inMemoryToken;
  authParam = "absasd";


  updateData = (values, origin) => {
    if (this.state.submissionState == true && typeof (this.inMemoryToken) != "undefined") {
      fetch("/api/update_user_data", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
          "Content-Type": "text/plain",
          "Completion-State": JSON.stringify(this.state.completionState)
        },
        body: JSON.stringify(values) + "#" + origin
      }).then(response =>
        response.json()).then(data => {
          console.log("Sent: " + data);
        });
    } else if (this.state.submissionState == false) {
      console.log("Submission disabled");
    }
  };

  onSubmit = (values, origin) => {
    if (this.state.submissionState == true) {
      fetch("/api/update_user_data", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
          "Content-Type": "text/plain",
          "Completion-State": JSON.stringify(this.state.completionState)
        },
        body: JSON.stringify(values) + "#" + origin + "#" + "submit"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    } else if (this.state.submissionState == false) {
      console.log("Submission disabled");
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

  AppContainer = () => {
    return (
      <React.Fragment>
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
            {this.RenderedPages()}
          </Content>
        </Layout>
      </React.Fragment>
    );
  };

  RenderedPages = () => {
    return (
      <React.Fragment>
        <PageContainer>
          <ReactSwitch>
            <Route
              path="/apply"
              exact
              render={props => {
                return (
                  (this.authParam = props.location.search),
                  <Redirect to="/apply/internship-info" />
                );
              }}
            />

            <Route
              path="/apply/internship-info"
              render={props => (
                <PageInternshipInformation
                  {...props}
                  clickTwo={this.clickTwo}
                  uploadFile={this.uploadFile}
                  updateData={this.updateData}
                  getJwt={this.getJwt}
                  setCompletionState={this.setCompletionState}
                />
              )}
            />

            <Route
              path="/apply/personal"
              render={props => (
                <PagePersonal
                  {...props}
                  clickOne={this.clickOne}
                  clickThree={this.clickThree}
                  updateData={this.updateData}
                  getJwt={this.getJwt}
                  setCompletionState={this.setCompletionState}
                />
              )}
            />

            <Route
              path="/apply/written-work"
              render={props => (
                <PageEssays
                  {...props}
                  clickTwo={this.clickTwo}
                  clickFour={this.clickFour}
                  uploadFile={this.uploadFile}
                  updateData={this.updateData}
                  getJwt={this.getJwt}
                  setCompletionState={this.setCompletionState}
                />
              )}
            />

            <Route
              path="/apply/references"
              render={props => (
                <PageReferences
                  {...props}
                  clickThree={this.clickThree}
                  onSubmit={this.onSubmit}
                  updateData={this.updateData}
                  getJwt={this.getJwt}
                  setCompletionState={this.setCompletionState}
                />
              )}
            />

            <Route
              path="/apply/*"
              render={props => {
                return (
                  (this.authParam = props.location.search),
                  <Redirect to="/apply/internship-info/" />
                );
              }}
            />
          </ReactSwitch>
        </PageContainer>
      </React.Fragment>
    );
  };


  auth = () => {
    try {
      var authCode = this.authParam.split("=")[1];
      fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: authCode
      })
        .then(response => response.json())
        .then(data => {
          if (data !== "Invalid Grant") {
            data = JSON.parse(data);

            this.inMemoryToken = {
              token: data.id_token,
              expiry: data.expires_in,
              refresh: data.refresh_token
            };
            console.log(this.inMemoryToken);
          } else {
            window.location.href =
              configurationFile.authUrl;
          }
        });
    } catch (e) {
      window.location.href =
        configurationFile.authUrl;
    }
  };

  refresh = () => {
    fetch("/api/auth/refresh")
      .then(response => response.json())
      .then(data => {
        if (data == null) {
          //Exchange Auth
          //Store JWT in memory
          //Store Refresh Token
          this.auth();
        } else {
          //Check for JWT
          if (typeof this.inMemoryToken == "undefined") {
            console.log("I should probably exchange refresh for JWT");
            this.exchange();
          } else {
            console.log("JWT exists, yay");
            this.getUserData();
          }
        }
      });
  };

  exchange = () => {
    console.log("Exchanging");
    fetch("/api/auth/exchange")
      .then(response => response.json())
      .then(data => {
        data = JSON.parse(data);
        if (data.error !== "invalid_grant") {
          this.inMemoryToken = {
            token: data.id_token,
            expiry: data.expires_in,
            refresh: data.refresh_token
          };
          console.log(this.inMemoryToken);
        } else {
          this.logout();
        }
      });
  };

  logout = () => {
    fetch("/api/logout")
      .then(response => response.json())
      .then(data => {
        console.log(typeof data);
        window.location.href = data;
      });
  };

  getJwt = () => {
    return new Promise((resolve, reject) => {
      var app = this;
      function checkToken() {
        if (app.inMemoryToken === undefined) {
          setTimeout(() => {
            checkToken();
          }, 10);
        } else {
          resolve(app.inMemoryToken.token);
        }
      }
      checkToken();
    });
  };

  uploadFile = async (file, source) => {
    console.log("Uploading");
    const fd = new FormData();
    fd.append("file", file);

    for (var pair of fd.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    let token = await this.getJwt();

    fetch("/api/upload_user_files", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
        Source: JSON.parse(JSON.stringify(source))
      },
      body: fd
    }).then(response => {});
  };

  setCompletionState = (page, state) => {
    let currentCompletionState = this.state.completionState;
    try {
      currentCompletionState[page] = state;
    } catch (e) {}
  };

  getCompletionState = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.state.completionState);
      }, 10);
    });
  };

  getCachedCompletionState = async() => {
    let token = await this.getJwt();
    fetch("/api/get_user_data", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token))
      },
      body: 0
    })
      .then(response => response.json())
      .then(data => {
        let parsedRecv = JSON.parse(data);
        if(parsedRecv != "No Info"){
          let recvCompletionState = parsedRecv[1];
          this.setState({completionState:recvCompletionState})
        }

      })
  }


  resize = () => {
    let hideNav = (window.innerWidth <= 1300);
    if (hideNav !== this.state.isCollapsed) {
      this.setState({ isCollapsed: hideNav });
    }
    //console.log("After: currentHideNav:" + currentHideNav + ", isCollapsed:" + isCollapsed + ", WindowInnerWidth:" + window.innerWidth)
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
        getCompletionState={this.getCompletionState}
        onSubmit={this.onSubmit}
        isCollapsed={this.state.isCollapsed}
      />
    );
  };

  componentDidMount() {
    console.log("mounted");
    this.refresh();
    this.getCachedCompletionState();
    this.interval = setInterval(() => this.resize(), 500)
    console.log(this.state)
    return () => clearInterval(this.interval);
  }

  componentWillUnmount() {
    //This is here because I don't know if the return statement will work lol
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        {this.resize()}
        <Router>
          <header>
            <Navbar
              logout={this.logout}
            />
          </header>
          <ReactSwitch>
            {/*
              Implement in the next version with the official dashboard

              <Route path="/dashboard" exact component={Dashboard} />
              */}
            <Route path="/how-to-apply" exact component={HowtoApply} />
            <Route path="/apply">{this.AppContainer()}</Route>
            <Route
              path="/submission-success"
              exact
              component={SubmissionSuccess}
            />
            <Route
              path="/"
              exact
              render={props => {
                return (
                  (this.authParam = props.location.search),
                  < Redirect to="/apply/internship-info" />
                );
              }}
            />
            <Route path="*" render={props => <PageNotFound {...props} />} />
          </ReactSwitch>
        </Router>
      </div>
    );
  }
}

export default App;
