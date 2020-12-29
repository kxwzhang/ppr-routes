import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import styled from 'styled-components'
const { Header } = Layout

export const NavigationBar = withRouter(() => {
  return (
    <Layout>
      <Header className="fixed top-0 left-0 z-1 w-100">
        <Logo />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ background: '#141414' }}>
          <Link to="/profile"><Menu.Item key="1">Profile</Menu.Item></Link>
          <Link to="/subscribe"><Menu.Item key="2">Music</Menu.Item></Link>
          <Link to="/music"><Menu.Item key="3">Subscribe</Menu.Item></Link>
        </Menu>
      </Header>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </Layout>
  )
})

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;


