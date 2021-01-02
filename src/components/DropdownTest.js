import React from 'react'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

const handleButtonClick = (e) => {
  message.info('Click on left button.')
  console.log('click left button', e)
}

const handleMenuClick = (e) => {
  message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
)

export const DropdownTest = () => {
  return (
    <div>
      
    </div>
  )
}
