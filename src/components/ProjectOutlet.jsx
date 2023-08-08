import React from 'react';
import { Layout, Space } from 'antd';
import Project from './Project';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#96888C',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#CBE095',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#001C0E',
  minHeight:587,
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#96888C',
};


const ProjectOutlet = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >


    <Layout>
      <Sider style={siderStyle}>Bug Tracker</Sider>
      <Layout>
        <Header style={headerStyle}>Bug Log</Header>
        <Content style={contentStyle}>
            <Project/>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Space>
);
