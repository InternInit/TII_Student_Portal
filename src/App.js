import React, { Component } from "react";

//Logo Import
import logo from "./logo.svg";

//Ant Design Imports
import { Layout, Menu } from "antd";

//Custom Component Imports
import IntegratedForm from "./components/integratedForm.jsx";
import Navbar from "./components/navbar.jsx";
import TiiNav from "./components/TiiNav.jsx";
import PagePersonal from "./components/pagePersonal.jsx";

//CSS Imports
import "./App.css";

//Declarations
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    page: 0
  };

  onNext = () => {
    const newPage = this.state.page + 1;
    this.setState({
      page: newPage
    });
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
    return <IntegratedForm page={pageNumber} onNext={this.onNext} />;
  };

  // BUG: PROBLEM WITH RENDERING THE DIFFERENT NAVBAR SELECTIONS
  renderNav = () => {
    const highlightKey = String([this.state.page + 1]);
    return (
      <TiiNav
        clickOne={this.clickOne}
        clickTwo={this.clickTwo}
        clickThree={this.clickThree}
        clickThree={this.clickThree}
        highlightKey={highlightKey}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Layout>
          {this.renderNav()}
          <Content
            style={{
              display: "flex",
              padding: "30px",
              justifyContent: "center",
              backgroundColor: "white"
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
