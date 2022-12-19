import React, { useState } from 'react';
import { Layout, Menu, Image, ConfigProvider, theme } from 'antd';

import { routers, menuItems } from './routers';

const { Header, Content, Sider } = Layout;
const { useToken } = theme;

const App = () => {
  const defaultPage = 'Home'
  const { token } = useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(defaultPage)

  const switchPage = (value) => {
    setCurrentPage(value)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
        },
      }}
    >
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider
          style={{
            paddingTop: '0.4vh'
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Image
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            height='4.6vh'
            width='100%'
          />
          <Menu theme="dark" defaultSelectedKeys={[defaultPage]} mode="vertical" items={menuItems} onClick={(item) => { switchPage(item.key) }} />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              height: '5vh',
              background: token.colorBgContainer,
              boxShadow: token.boxShadow,
            }}
          />
          <Content
            style={{
              margin: '0 0px',
              padding: '0 0px',
              backgroundColor: '#F0F2F5'
            }}
          >
            {routers[currentPage]}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
