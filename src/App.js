import './App.css';
import { Layout } from 'antd';

import HeaderComp from './comps/HeaderComp';
import SelectComp from './comps/SelectComp';

const { Footer, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <HeaderComp />
        <Layout>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <div className='site-layout-content'>
                <SelectComp />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Safe Travel</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
