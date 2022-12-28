import React, { useState } from 'react';
import { Layout, Menu, Image, ConfigProvider, theme, Switch, Avatar, Space, Typography } from 'antd';
import { UserOutlined, GlobalOutlined, SearchOutlined } from '@ant-design/icons';
import { Outlet } from "react-router-dom";

import './index.css';
import { menuItems } from '../../routers';

const { Header, Content, Sider } = Layout;
const { useToken } = theme;
const { Text } = Typography;

const PageLayout = () => {
  const defaultPage = 'Home'
  const { token } = useToken()
  const [collapsed, setCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState(defaultPage)

  const menuSwitchPage = (page) => {
    setCurrentPage(page)
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
              preview={false}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              height='4.6vh'
              width='100%'
            />
            <Menu
              theme="dark"
              defaultSelectedKeys={[defaultPage]}
              mode="vertical" items={menuItems}
              onClick={(item) => {
                menuSwitchPage(item.key)
              }}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              className='layout-header'
              style={{
                padding: 0,
                height: '5vh',
                background: token.colorBgContainer,
                boxShadow: token.boxShadow,
                zIndex: 10,
              }}
            >
              <Space size={16} align={'center'} style={{ paddingRight: token.paddingSM }}>
                <SearchOutlined />
                <Switch defaultChecked />
                <Space size={8} align={'center'}>
                  <Avatar size="small" icon={<UserOutlined />} />
                  <Text>User</Text>
                </Space>
                <GlobalOutlined />
              </Space>
            </Header>
            <Content
              style={{
                margin: '0 0px',
                padding: '0 0px',
                backgroundColor: token.colorFillTertiary,
                zIndex: 5,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
  );
};

export default PageLayout;
