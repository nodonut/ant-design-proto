import React, { useState, useEffect } from 'react';
import { Select, Table, Input, Layout } from 'antd';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';

//------------------------------------
const client = new ApolloClient({
  uri: 'https://dev.app.safetravelbarometer.com/api',
  cache: new InMemoryCache(),
});
//------------------------------------

const { Header, Footer, Content } = Layout;

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Content>Content</Content>
      </Layout>
    </>
  );
}
