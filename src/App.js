import React, { useState } from 'react';
import { Layout, Menu, Image, ConfigProvider } from 'antd';

import { routers, menuItems } from './routers';

const { Header, Content, Sider } = Layout;

const App = () => {
  const defaultPage = 'Home'
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
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Image
            width={50}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            height={'6vh'}
          />
          <Menu theme="dark" defaultSelectedKeys={[defaultPage]} mode="vertical" items={menuItems} onClick={(item) => { switchPage(item.key) }} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              height: '5vh'
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
