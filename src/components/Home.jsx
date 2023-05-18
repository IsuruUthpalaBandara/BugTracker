import { Button, Layout, List, Space } from 'antd';
import { useNavigate,Outlet } from 'react-router-dom';
import './Home.css'
import Login from './Login';

const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: 'black',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'white',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '0px',
  color: 'black',
  backgroundColor: 'white',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '10px',
  height:'1000px',
  color: 'black',
  backgroundColor: 'white',
  paddingTop:70,
};
const footerStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'white',
};

const btnStyle={
  width:120,

  

}

export default function Home (){

  const projectList={}
  localStorage.setItem("projectList",projectList)

  const navigate=useNavigate()

  return (
  <Space
    direction="vertical"
    style={{
      width: '100%',

    }}
    size={[0, 48]}
  >


    <Layout>
      <Sider 
      style={siderStyle}>
        
        <List style={{textAlign:'center', paddingLeft:'20px'}} split={false}>
          <List.Item>
            <Button style={btnStyle}  onClick={()=>navigate('login')}>Login</Button>
          </List.Item>
          <List.Item>
            <Button  style={btnStyle}   onClick={()=>navigate('signin')}>Sign In</Button>
          </List.Item>
          <List.Item>
            <Button style={btnStyle}  onClick={()=>navigate('openproject')}>Open Project</Button>
          </List.Item>
          <List.Item>
            <Button style={btnStyle}   onClick={()=>navigate('createProject')}>Create Project</Button>
          </List.Item>
          <List.Item>
            <Button style={btnStyle} >Delete</Button>
          </List.Item>
          <List.Item>
            <Button style={btnStyle}  >Add Member</Button>
          </List.Item>
          <List.Item>
            <Button style={btnStyle}  >Add Bug</Button>
          </List.Item>
        </List>
       
      </Sider>
      <Layout>
        <Header style={headerStyle}><h1>Bug Tracker</h1></Header>
        <Content style={contentStyle}>
          <Outlet/>
        </Content>
        <Footer style={footerStyle}>created using React</Footer>
      </Layout>
    </Layout>
  </Space>
)};
