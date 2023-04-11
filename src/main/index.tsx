import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import Breadcrumb from './bread-crumb'
import { Outlet } from 'react-router-dom'
import Menu from '@/main/Menu'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu></Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb></Breadcrumb>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.xxssssaaxx22
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App
