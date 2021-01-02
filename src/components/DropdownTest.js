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

export const DropdownTest = () => {
  return (
    <div>
      
    </div>
  )
}
