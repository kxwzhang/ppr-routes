import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout
import styled from 'styled-components'

export const NavigationBar = withRouter(() => {
  return (
    // <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* <div className="logo" /> */}
          <Logo />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Kevin</Footer>
      </Layout>
    // </div>
  )
})

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;


