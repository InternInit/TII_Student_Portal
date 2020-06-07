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
    submissionState: true
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
          "Authorization": "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
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

  onBack = (values, origin) => {
    const newPage = this.state.page - 1;
    this.setState({
      page: newPage
    });

    if (this.state.submissionState == true){
      fetch("/update_user_data", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
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

  onSubmit = (values, origin) => {
    if(this.state.submissionState == true){
      fetch("/update_user_data", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + JSON.parse(JSON.stringify(this.inMemoryToken.token)),
          "Content-Type": "text/plain"
        },
        body: JSON.stringify(values) + "#" + origin + "#" + "submit"
        }).then(response =>
          response.json()).then(data => {
            console.log(data);
            window.location.href = "https://interninit.com"
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
        getJwt={this.getJwt}
        uploadFile={this.uploadFile}
      />
    );
  };

  switchOnChange = checked => {
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
              this.getUserData();
            }
          }
        });
        //console.log(this.inMemoryToken.token)
  }

  exchange = () => {
    console.log("Exchanging")
    fetch("/auth/exchange").then(response =>
      response.json()).then(data => {
        data = JSON.parse(data)
        if(data.error !== "invalid_grant"){
          this.inMemoryToken = {
            token: data.id_token,
            expiry: data.expires_in,
            refresh: data.refresh_token
          }
          console.log(this.inMemoryToken)
        } else{
          this.logout();
        }
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

    return new Promise((resolve, reject) => {
      var app = this;
      function checkToken() {
        if(app.inMemoryToken === undefined){
          setTimeout(() => {
            checkToken()
          }, 10)
        } else {
          resolve(app.inMemoryToken.token)
        }

    }
    checkToken();

    })

  }

  uploadFile = async(file, source) => {
    console.log("Uploading")
    const fd = new FormData();
    fd.append("file", file)

    for(var pair of fd.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
    }
    let token = await this.getJwt()

    fetch('/upload_user_files', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + JSON.parse(JSON.stringify(token)),
        "Source" : JSON.parse(JSON.stringify(source))
      },
      body: fd,
    }).then((response) => {

    });

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

/*
  componentDidUpdate(){
    this.getUserData();
  }
*/
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch checkedChildren="Submission On" unCheckedChildren="Submission Off" defaultChecked="true" onChange={this.switchOnChange}></Switch>
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
