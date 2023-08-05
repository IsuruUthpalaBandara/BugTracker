import React from 'react';
import { useState } from 'react';
import { Layout, Space, Button,List , Drawer} from 'antd';
import bug from "./images/bug.png"
import Login from './Login';
import Signin from './Signin'
import { Outlet } from 'react-router-dom';


const c="#CCC65B";


const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'left',
  color: c,
  fontSize:'40px',
  height: 100,
  paddingInline: 50,
  padding:20,
  lineHeight: '64px',
  backgroundColor: 'black',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 490,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'black',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'black',
};
const footerStyle = {
  textAlign: 'center',
  color: c,
  backgroundColor: 'black',
  lineHeight:'10px',
  minHeight:20
};
const btnStyle={
  width:120,
  color:c,
  fontSize:20
  

  

}




const Home = () => {

  const [login,setLogin]=useState(false);
  const [signIn,setSignIn]=useState(false);

  const openLoginForm=()=>{
    setLogin(true)
  }

  const onCloseLogin=()=>{
    setLogin(false)
  }

  const openSignInForm=()=>{
    setSignIn(true)
  }

  const onCloseSignIn=()=>{
    setSignIn(false)
  }

return (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >


    <Layout>
      <Header style={headerStyle}>
        <div>
        
        </div>
        
        <b>Bug Tracker</b></Header>
      <Layout hasSider>
        <Content style={contentStyle}>

      




        </Content>
        <Sider style={siderStyle}>
          <List style={{textAlign:'center', paddingLeft:'20px'}} split={false}>
            <List.Item>
              <Button style={btnStyle} type="link" onClick={openLoginForm} >Login</Button>
             </List.Item>
            <List.Item>
                <Button  style={btnStyle} type="link" onClick={openSignInForm}>Sign In</Button>
            </List.Item>
        </List>
        <>
              <Drawer title="" placement="right" onClose={onCloseLogin} open={login} style={{backgroundColor:'#C3BC2B' }}>

                  <Login/>


              </Drawer>
        </>
        <>
              <Drawer title="" placement="right" onClose={onCloseSignIn} open={signIn} style={{backgroundColor:'#8AA881'}}>

                  <Signin/>


              </Drawer>
        </>
          

        </Sider>
      </Layout>
      <Footer style={footerStyle}>Created by Isuru Uthpala Bandara 2023</Footer>
    </Layout>
    
    
  </Space>
)};
export default Home