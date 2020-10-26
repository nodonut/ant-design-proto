import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '1em',
};

function HeaderComp() {
  return (
    <Header style={headerStyle}>
      <Title style={{ color: 'whitesmoke' }}>Safe Travel Barrowmeter</Title>
    </Header>
  );
}

export default HeaderComp;
