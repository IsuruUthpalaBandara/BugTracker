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
  minHeight: 490,
  lineHeight: '30px',
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
  color:'#00FF00',
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
        
        <b class="shortDes">Bug Tracker</b></Header>
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

          <Row>
            <Col> span={4}

            </Col>
            <Col span={8}>
              
            <div class="des">
              This application aids you to record and monitor the bugs in your coding project.
              You can record the details of a bugs you find, save the current status of it and set deadlines.
              Start checking this application by pressing the "Demo" button.
              If you want to save your work and continue, you have to click "Sign In" and create an account.
              If you already have an account, please press "Login"</div>
              
         
            </Col >

            <Col span={12}>

            <img src={matrix} style={{width:600, textAlign:'right',marginLeft:40}} alt="dfbdb"/>
            
            </Col>
          </Row>


     
        
              

          


            
           


         
 

      
  
        </Content>







      </Layout>
      
    </Layout>
    
    
  </Space>
)};
export default Home