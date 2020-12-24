import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

export const NavigationBar = () => {
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

        </Header>
      </Layout>
    </div>
  )
}
