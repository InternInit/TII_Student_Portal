import React from "react";

//Logo Import
import logo from "./logo.svg";

//Ant Design Imports
import { Layout, Menu } from "antd";

//Custom Component Imports
import IntegratedForm from "./components/integratedForm.jsx";
import Navbar from "./components/navbar.jsx";

//CSS Imports
import "./App.css";

//Declarations
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Content style={{ padding: "0 50px", margin: " 5% 0 0 0" }}>
        <Layout>
          <Sider className="site-layout-background" width={300} dark>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              theme="dark"
            >
              <Menu.Item>Hello</Menu.Item>
              <Menu.Item>Hello</Menu.Item>
              <Menu.Item>Hello</Menu.Item>
            </Menu>
          </Sider>
          <Content className="FormArea" style={{ padding: "3%" }}>
            <IntegratedForm />
          </Content>
        </Layout>
      </Content>
    </div>
  );
}

export default App;
