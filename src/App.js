import './App.css';
import { Breadcrumb, Button, Layout, Menu, Typography, Table } from 'antd';

import TableComp from './comps/TableComp';
import HeaderComp from './comps/HeaderComp';
import SiderComp from './comps/SiderComp';
import ColSwitch from './comps/ColSwitch';

const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <HeaderComp />
        <Layout>
          <SiderComp />
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
              </Breadcrumb>
              <div className='site-layout-content'>
                <ColSwitch />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Example Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
