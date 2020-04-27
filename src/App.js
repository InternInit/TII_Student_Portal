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
        <Layout>


          >
            <TiiNav />


          <Content className="FormArea" style={{
            display: "flex",
            padding: "30px",
            width: "75%",
          }}>

            <IntegratedForm />

          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
