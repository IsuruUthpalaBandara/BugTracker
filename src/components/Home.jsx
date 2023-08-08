import React from 'react';
import { useState } from 'react';
import { Layout, Space, Button,List , Drawer, Card, Col, Row} from 'antd';
import logo from "./images/bug.png"
import Login from './Login';
import Signin from './Signin'
import { Outlet, useNavigate } from 'react-router-dom';
import matrix from './images/matrix.gif'
import './Home.css'

const c="#CCC65B";


const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'left',
  color: 'white',
  fontSize:'25px',
  height: 100,
  paddingInline: 50,
  padding:20,
  paddingLeft:35,
  lineHeight: '64px',
  backgroundColor: 'black',
};
const contentStyle = {
  textAlign: 'right',
  minHeight: 490,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'black',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '12px',
  color: '#fff',
  backgroundColor: 'black',
};


const btnStyle={
  width:120,
  color:'violet',
  fontSize:15,
  textAlign:'center',
  marginTop:30
  

  

}




const Home = () => {

  const navigate = useNavigate()

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

  const openDemo=()=>{

    const demo ={}
    demo.projectName="Demo Project"

    localStorage.setItem("demo",JSON.stringify(demo))
    navigate('demo')

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
        
        <Sider style={siderStyle}>

          <div>
          <img src={logo} style={{width:70}} alt="dfbdb"/>
          </div>
          <List>
            
              <Button ghost style={btnStyle}  onClick={openLoginForm}>Login</Button>
          
                <Button ghost style={btnStyle}  onClick={openSignInForm}>Sign In</Button>
          
                <Button ghost style={btnStyle} onClick={openDemo} >Demo</Button>

                <Button ghost style={btnStyle}  >About</Button>
          
     


        </List>
        <>
              <Drawer title="" placement="right" onClose={onCloseLogin} open={login} style={{backgroundColor:'white' }}>

                  <Login/>


              </Drawer>
        </>
        <>
              <Drawer title="" placement="right" onClose={onCloseSignIn} open={signIn} style={{backgroundColor:'white'}}>

                  <Signin/>


              </Drawer>
        </>
          

        </Sider>

        <Content style={contentStyle}>
        
              

          


            
            <img src={matrix} style={{width:540}} alt="dfbdb"/>


         
 

      
  
        </Content>







      </Layout>
      
    </Layout>
    
    
  </Space>
)};
export default Home