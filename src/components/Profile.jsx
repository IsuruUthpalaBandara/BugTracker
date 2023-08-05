import React ,{useState} from 'react';
import { Layout, Space ,List, Button, Drawer} from 'antd';
import ProjectList from './ProjectList'
import CreateProjectForm from './CreateProjectForm';

const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#780000',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 587,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#D6E7BB',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#001F3C',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  minHeight:0
};

const profileBtnStyle={
  color:'white',
  textAlign:'center',
  marginLeft:20,
}
const Profile = () => {

  
const [createProjectOnOff,setCreateProjectOnOff]=useState(false)

const openCreateProject=()=>{

  setCreateProjectOnOff(true)

}

const closeCreateProject=()=>{
  setCreateProjectOnOff(false)
}




  return(
  <Space
    direction="vertical"
    style={{
      width: '100%'
    }}
    size={[0, 48]}
  >
  
    
    <Layout>
      <Sider style={siderStyle}>

        <div style={{color:'#00B600'}}>Bug Tracker</div>


        
        
        <List>
          <List.Item>
            <Button type='Link' style={profileBtnStyle} onClick={openCreateProject}>Create New Project</Button>
          </List.Item>

          <List.Item>
            <Button type='Link' style={profileBtnStyle} >Project Team</Button>
          </List.Item>

        </List>

        <Drawer title ="Create New Project" placement="left" onClose={closeCreateProject} open={createProjectOnOff}>

          <CreateProjectForm/>

        </Drawer>
      
      
      
      
      
      
      </Sider>
      <Layout>
        <Header style={headerStyle}>My Projects</Header>
        <Content style={contentStyle}>

          <ProjectList/>

        </Content>
        
      </Layout>
    </Layout>
  </Space>
)};
export default Profile;