import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import "./App.css";
import NumpadWithScreen from "./Numpad/NumpadWithScreen";

function App() {
  const total = "25.5";
  return (
    <React.Fragment>
      <Layout className="layout">
        <Sider
          width={200}
          className="site-layout-background"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          ></div>
        </Content>
      </Layout>
    </React.Fragment>
    // <div className="App">
    //   <h1> Hello, World! </h1>
    //   <h2>Total: {total}</h2>
    //   <NumpadWithScreen exact={total} />
    // </div>
  );
}

export default App;
