import React from 'react';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  FilterOutlined,
  CompassOutlined,
  HomeOutlined,
  CarOutlined,
  CustomerServiceOutlined,
  BankOutlined,
  RocketOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function SiderComp() {
  return (
    <Sider>
      <Menu defaultSelectedKeys={['categories']} mode='inline'>
        <Menu.Item key='dashboard'>Dashboard</Menu.Item>
        <SubMenu
          title={
            <span>
              <FilterOutlined />
              <span>Categories</span>
            </span>
          }
        >
          <Menu.ItemGroup key='categories' title='Categories'>
            <Menu.Item key='airlines'>Airlines</Menu.Item>
            <Menu.Item key='precautions'>Precautions</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item icon={<CompassOutlined />}>Destination</Menu.Item>
        <Menu.Item icon={<CompassOutlined />}>Airlines</Menu.Item>
        <Menu.Item icon={<CompassOutlined />}>Airports</Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>Airports</Menu.Item>
        <Menu.Item icon={<CarOutlined />}>Mobility</Menu.Item>
        <Menu.Item icon={<CustomerServiceOutlined />}>
          Activities/Events
        </Menu.Item>
        <Menu.Item icon={<RocketOutlined />}>Amusement Parks</Menu.Item>
        <Menu.Item icon={<BankOutlined />}>Museums</Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderComp;
