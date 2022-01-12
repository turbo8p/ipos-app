import { Breadcrumb, Button, Card, Col, Layout, Menu, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import NumpadWithScreen from "./Numpad/NumpadWithScreen";
import {
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  FileOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

function App() {
  const total = "25.5";
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const cardStyle = {
    cursor: "pointer",
    marginLeft: "2px",
    marginRight: "2px",
  };
  const big = useMediaQuery({ minWidth: 1100 });
  const medium = useMediaQuery({ minWidth: 800 });

  const tiles = [];
  let max;
  if (big) {
    max = 4;
  } else if (medium) {
    max = 3;
  } else {
    max = 2;
  }

  for (let i = 1; i <= max; i++) {
    tiles.push(
      <Col span={24 / max - 2} style={cardStyle}>
        <Card
          bordered={false}
          cover={
            <img alt="example" src="https://dummyimage.com/150x150/000/fff" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    );
  }

  return (
    <React.Fragment>
      <Layout style={{ minHeight: "100vh" }} hasSider>
        <Sider
          theme="light"
          collapsible
          collapsed={menuCollapsed}
          onCollapse={(collapsed) => {
            setMenuCollapsed(collapsed);
          }}
        >
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            inlineCollapsed={menuCollapsed}
          >
            <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
              Checkout
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Row>{tiles}</Row>
              <Row>{tiles}</Row>
            </div>
          </Content>
        </Layout>
        <Sider theme="light"></Sider>
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
