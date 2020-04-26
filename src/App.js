import React, { Component } from "react";

//Logo Import
import logo from "./logo.svg";

//Ant Design Imports
import { Layout, Menu } from "antd";

//Custom Component Imports
import IntegratedForm from "./components/integratedForm.jsx";
import Navbar from "./components/navbar.jsx";
import TiiNav from "./components/TiiNav.jsx";

//CSS Imports
import "./App.css";

//Declarations
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Content style={{ padding: "0 50px", margin: " 5% 0 0 0" }}>
          <Layout>
            <Sider width={300} style={{ background: "white" }}>
              <TiiNav />
            </Sider>
            <Content className="FormArea" style={{ padding: "3%" }}>
              <IntegratedForm />
            </Content>
          </Layout>
        </Content>
      </div>
    );
  }
}

export default App;
