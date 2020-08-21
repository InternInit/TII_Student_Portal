import React, { Component } from "react";

//Ant Design Imports
import { Layout } from "antd";

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
import Dashboard from "./components/dashboard/dashboard.jsx";
import HowtoApply from "./components/HowtoApply";
import SubmissionSuccess from "./components/submissionSuccess";
import newStudent from "./components/newStudent.jsx";
import EditProfile from "./components/EditProfile.js";
import FAQPage from "./components/FAQ/FAQPage";

import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp.js";

//CSS Imports
import "./App.css";

//React Routing
import {
  BrowserRouter as Router,
  Route,
  Switch as ReactSwitch,
  Redirect,
} from "react-router-dom";

//Redux
import { connect } from "react-redux";
import {
  updateUserName,
  updateDisplayName,
  updateAvatar,
  updateEmail,
  updateId,
  updateVersion,
  updatePinnedBusinesses,
  updateActiveApplications,
  updateCompletionState,
  batchUpdateCompletionState,
  batchUpdateCompletionChecklist,
} from "./redux/actions";

import devConfigurationFile from "./configuration_dev.json";
import prodConfigurationFile from "./configuration_prod.json";

//Amplify
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

let configurationFile = {};
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  configurationFile = devConfigurationFile;
} else {
  configurationFile = prodConfigurationFile;
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

function noop() {}

//Declarations
const { Content } = Layout;

//Styles
const PageContainer = styled.div`
  display: flex;
  width: 70%;
  padding-left: 5%;
  padding-right: 5%;
  justifycontent: center;
  background-color: white;
  border-radius: 10px;

  flex-direction: column;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    completionState: state.completionState,
    completionChecklist: state.completionChecklist,
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = {
  updateUserName,
  updateDisplayName,
  updateAvatar,
  updateEmail,
  updateId,
  updateVersion,
  updatePinnedBusinesses,
  updateActiveApplications,
  updateCompletionState,
  batchUpdateCompletionState,
  batchUpdateCompletionChecklist,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.state = {
      wWidth: window.innerWidth,
      wHeight: window.innerHeight,
      isCollapsed: false,
      page: 0,
      submissionState: true,

      authorized: false,
      version: 0,
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.newAuth();
    this.getCachedCompletionState();
    this.getPinnedBusinesses();
    this.getActiveApplications();
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    //This is here because I don't know if the return statement will work lol
    window.removeEventListener("resize", this.resize);
  }

  inMemoryToken;

  newAuth = async () => {
    Auth.currentSession()
      .then((session) => {
        console.log(session);
        this.inMemoryToken = {
          token: session.idToken.jwtToken,
          expiry: session.idToken.payload.exp,
          refresh: session.refreshToken.token,
          access: session.accessToken.jwtToken,
        };
        console.log(this.inMemoryToken);
        this.props.updateUserName(session.accessToken.payload.username);
        this.props.updateDisplayName(session.idToken.payload.name);
        this.props.updateEmail(session.idToken.payload.email);
        this.props.updateId(session.idToken.payload.sub);
        let id = session.idToken.payload.sub;
        let s3MediaBucket = `https://tii-intern-media.s3.amazonaws.com/${id}/profile_picture`;
        this.props.updateAvatar(s3MediaBucket);
      })
      .catch((error) => {
        console.log("Session Error: " + error);
        if (window.location.href.split("/")[3] !== "login") {
          window.location.href =
            window.location.href.split("/").slice(0, 3).join("/") + "/login";
        }
        //TODO: Update to a more elegant solution
      });
  };

  updateData = (values, origin) => {
    if (
      this.state.submissionState === true &&
      typeof this.inMemoryToken != "undefined"
    ) {
      fetch("/api/update_user_data", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
          "Content-Type": "text/plain",
          "Completion-State": JSON.stringify(this.props.completionState),
          "Completion-Checklist": JSON.stringify(
            this.props.completionChecklist
          ),
          Version: JSON.stringify(this.props.userInfo.version),
        },
        body: JSON.stringify(values) + "#" + origin,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Sent: " + data);
        });
    } else if (this.state.submissionState === false) {
      console.log("Submission disabled");
    }
  };

  onSubmit = (values, origin) => {
    if (this.state.submissionState === true) {
      this.props.updateVersion(this.props.userInfo.version + 1);
      fetch("/api/update_user_data", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
          "Content-Type": "text/plain",
          "Completion-State": JSON.stringify(this.props.completionState),
          "Completion-Checklist": JSON.stringify(
            this.props.completionChecklist
          ),
          Version: JSON.stringify(this.props.userInfo.version),
        },
        body: JSON.stringify(values) + "#" + origin + "#" + "submit",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } else if (this.state.submissionState === false) {
      console.log("Submission disabled");
    }
  };

  logout = async () => {
    Auth.signOut()
      .then(() => console.log("Signed Out"))
      .catch(() => console.log("Could Not Sign Out"));
    if (window.location.href.split("/")[3] !== "login") {
      window.location.href =
        window.location.href.split("/").slice(0, 3).join("/") + "/login";
    }
  };

  getJwt = () => {
    return new Promise((resolve, reject) => {
      let app = this;
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
        Source: JSON.parse(JSON.stringify(source)),
      },
      body: fd,
    }).then((response) => {});
  };

  updateBusinessStatus = async (businessId, status) => {
    let token = await this.getJwt();

    fetch("/api/update_business_status", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
        "Content-Type": "text/plain",
        businessId: JSON.parse(JSON.stringify(businessId)),
      },
      body: status,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getPinnedBusinesses();
        this.getActiveApplications();
      });
  };

  getPinnedBusinesses = async () => {
    let token = await this.getJwt();

    fetch("/api/get_business_by_status", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
        "Content-Type": "text/plain",
      },
      body: JSON.parse(JSON.stringify("Pinned")),
    })
      .then((response) => response.json())
      .then((data) => {
        this.matchBusinessesPinned(data);
      });
  };

  getActiveApplications = async () => {
    let token = await this.getJwt();

    fetch("/api/get_business_by_status", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
        "Content-Type": "text/plain",
      },
      body: JSON.parse(JSON.stringify("*")),
    })
      .then((response) => response.json())
      .then((data) => {
        let parsedData = JSON.parse(data);
        this.matchBusinessesActive(
          JSON.stringify(parsedData[0]),
          parsedData[1]
        );
      });
  };

  matchBusinessesPinned = (businessList) => {
    fetch("/api/match_businesses", {
      method: "POST",
      body: JSON.parse(JSON.stringify(businessList)),
    })
      .then((response) => response.json())
      .then((data) => {
        try {
          let matchedBusinessesArray = [];
          JSON.parse(data).hits.hits.forEach((item) =>
            matchedBusinessesArray.push(item._source)
          );
          this.props.updatePinnedBusinesses(matchedBusinessesArray);
        } catch (e) {
          console.log(data);
          console.log(e);
        }
      });
  };

  matchBusinessesActive = (businessList, statusList) => {
    fetch("/api/match_businesses", {
      method: "POST",
      body: JSON.parse(JSON.stringify(businessList)),
    })
      .then((response) => response.json())
      .then((data) => {
        try {
          let matchedBusinessesArray = [];
          JSON.parse(data).hits.hits.forEach((item) =>
            matchedBusinessesArray.push(item._source)
          );
          matchedBusinessesArray.forEach(
            (item, index) => (item.status = statusList[item.id])
          );
          console.log(matchedBusinessesArray);
          this.props.updateActiveApplications(matchedBusinessesArray);
        } catch (e) {
          console.log(data);
          console.log(e);
        }
      });
  };

  getCachedCompletionState = async () => {
    let token = await this.getJwt();
    //TODO: Implement a better way of defaulting
    let defaultChecklist = [
      [
        { key: "First Name", completed: false },
        { key: "Last Name", completed: false },
        { key: "Phone Number", completed: false },
        { key: "Email", completed: false },
        { key: "Address", completed: false },
        { key: "City", completed: false },
        { key: "State", completed: false },
        { key: "Zip Code", completed: false },
        { key: "Year Of Graduation", completed: false },
        { key: "Unweighted GPA", completed: false },
        { key: "Relevant Courses", completed: false },
        { key: "Extracurriculars", completed: false },
        { key: "Willing Work Days", completed: false },
        { key: "Willing Work Times", completed: false },
        { key: "Starting/Ending Dates", completed: false },
        { key: "Paid/Unpaid Preference", completed: false },
        { key: "Resume", completed: false },
      ],
      [
        { key: "Gender", completed: false },
        { key: "Age", completed: false },
        { key: "Education", completed: false },
      ],
      [
        { key: "Why This Industry Essay", completed: false },
        { key: "Leadership Roles Essay", completed: false },
        { key: "Extra Essay", completed: false },
        { key: "Cover Letter", completed: false },
      ],
      [{ key: "Reference", completed: false }],
    ];

    fetch("/api/get_user_data", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(JSON.stringify(token)),
      },
      body: 0,
    })
      .then((response) => response.json())
      .then((data) => {
        let parsedRecv = JSON.parse(data);
        if (parsedRecv !== "No Info") {
          console.log(parsedRecv);
          let recvCompletionState = parsedRecv.completionState;
          let recvCompletionChecklist = parsedRecv.completionChecklist;
          this.props.batchUpdateCompletionState(recvCompletionState);
          this.props.batchUpdateCompletionChecklist(recvCompletionChecklist);
          this.props.updateVersion(parsedRecv.version);
        } else {
          this.props.batchUpdateCompletionState([0, 0, 0, 0]);
          this.props.batchUpdateCompletionChecklist(defaultChecklist);
          this.props.updateVersion(0);
        }
      });
  };

  resize = () => {
    let hideNav = window.innerWidth <= 1300;
    if (hideNav !== this.state.isCollapsed) {
      this.setState({ isCollapsed: hideNav });
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
              minHeight: "100vh",
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
              render={(props) => {
                return (
                  (this.authParam = props.location.search),
                  (<Redirect to="/apply/internship-info" />)
                );
              }}
            />

            <Route
              path="/apply/internship-info"
              render={(props) => (
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
              render={(props) => (
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
              render={(props) => (
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
              render={(props) => (
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
              render={(props) => {
                return (
                  (this.authParam = props.location.search),
                  (<Redirect to="/apply/internship-info/" />)
                );
              }}
            />
          </ReactSwitch>
        </PageContainer>
      </React.Fragment>
    );
  };

  renderNav = () => {
    const highlightKey = String([this.state.page + 1]);
    return (
      <TiiNav
        clickOne={this.clickOne}
        clickTwo={this.clickTwo}
        clickThree={this.clickThree}
        clickFour={this.clickFour}
        highlightKey={highlightKey}
        completionState={this.props.completionState}
        onSubmit={this.onSubmit}
        isCollapsed={this.state.isCollapsed}
      />
    );
  };

  render() {
    return (
      <div className="App">
        {this.resize()}
        <Router>
          {window.location.pathname.includes("login") ||
          window.location.pathname.includes("signup") ? null : (
            <header>
              <Navbar logout={this.logout} userInfo={this.props.userInfo} />
            </header>
          )}
          <ReactSwitch>
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  version={this.state.version}
                  updateBusinessStatus={this.updateBusinessStatus}
                />
              )}
            />
            <Route
              path="/login"
              render={(props) => <LogIn newAuth={this.newAuth} />}
            />
            <Route
              path="/signup"
              render={(props) => <SignUp newAuth={this.newAuth} />}
            />
            <Route path="/how-to-apply" exact component={HowtoApply} />
            <Route
              path="/frequently-asked-questions"
              exact
              component={FAQPage}
            />
            <Route path="/edit-profile" exact component={EditProfile} />
            <Route path="/apply">{this.AppContainer()}</Route>
            <Route
              path="/submission-success"
              exact
              component={SubmissionSuccess}
            />
            <Route
              path="/"
              exact
              render={(props) => {
                return <Redirect to="/dashboard/my-internships" />;
              }}
            />
            <Route path="*" render={(props) => <PageNotFound {...props} />} />
          </ReactSwitch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
