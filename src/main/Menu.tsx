import { DesktopOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Home', 'home', <PieChartOutlined />),
  getItem('About', 'about', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5')
  ]),
  getItem('Home', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')])
]

const App: React.FC = () => {
  const [openKey, setOpenKey] = useState([''])
  const navigate = useNavigate()

  function menuClick(prop: { key: string }) {
    navigate(prop.key)
  }

  const openChnage = (openKey: string[]) => {
    console.log(openKey)
    setOpenKey([openKey[openKey.length - 1]])
  }

  return (
    <Menu
      theme='dark'
      defaultSelectedKeys={['1']}
      mode='inline'
      items={items}
      onClick={menuClick}
      onOpenChange={openChnage}
      openKeys={openKey}
    />
  )
}

export default App
