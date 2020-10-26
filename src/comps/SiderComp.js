import React from 'react';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  FilterOutlined,
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
      </Menu>
    </Sider>
  );
}

export default SiderComp;
