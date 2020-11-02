import React from 'react';
import { Menu, Layout, Typography, Dropdown, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '2em',
  paddingBottom: '2em',
};

let currentCategory = '';
export function HeaderComp() {
  const menu = (
    <Menu className={'categories'}>
      <Menu.Item onClick={(currentCategory = 'Airlines')}>
        <a target='_blank'>Airlines</a>
      </Menu.Item>
      <Menu.Item onClick={(currentCategory = 'Airports')}>
        <a target='_blank'>Airports</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Hotels</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Mobility</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Activities/Events</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Amusement Parks</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Museums</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Cruises</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank'>Short Term Rentals</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header style={headerStyle}>
      <Title style={{ color: 'whitesmoke', marginTop: '0.5em' }}>
        <Image
          src='https://app.safetravelbarometer.com/images/logos/stb-white-250-63.png'
          height={40}
          width={170}
        />
      </Title>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['1']}
        style={{ margin: '2em 2em' }}
      >
        <Menu.Item key='1'>Dashboard</Menu.Item>
      </Menu>
      <Dropdown overlay={menu}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          Categories <DownOutlined />
        </a>
      </Dropdown>
      ,
    </Header>
  );
}

export function getCategory() {
  return currentCategory;
}
