import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Layout, Space ,Button, Drawer, List, Table} from 'antd';
import ProjectList from './ProjectList'
import CreateProjectForm from './CreateProjectForm';
import Axios from 'axios'

const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'black',
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
  backgroundColor: '#122C2F',
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
  marginTop:30,

}
const Profile = () => {

const navigate = useNavigate()
  
const [createProjectOnOff,setCreateProjectOnOff]=useState(false)

const openCreateProject=()=>{

  setCreateProjectOnOff(true)

}

const closeCreateProject=()=>{
  setCreateProjectOnOff(false)
}




  const openProject=(values)=>{

    

    
    Axios.post("http://localhost:3001/api/loadproject",{
          projectName:values.projectName
        }).then((res)=>{
          const project=res.data[0]
          console.log("openProject=>",project)

          if(project.bugReport==null){
              project.bugReport=[]
          }
          else{
              project.bugReport=JSON.parse(project.bugReport)
          }
          
          
          //console.log("openProject=>",JSON.stringify(project))
          console.log("openProject=>",project)
        localStorage.setItem("project",JSON.stringify(project))
         navigate('../project')
        })
        .catch((err)=>{
          console.log(err)
        })

        
    
  
}


const columns = [
  {
    title: 'Project Name',
    dataIndex: 'projectName',
    key: 'projectName',
    render: (text,record) =>{
      return(

        <Button onClick={(e)=>openProject(record)}> {text} </Button>

    )} ,
  },

  {
    title: 'Author',
    dataIndex: 'projectCreator',
    key: 'projectCreator',
  }


];



  let projectList=[]
  



  const Refresh=()=>{


    Axios.get("http://localhost:3001/api/projectlist")
    .then((res)=>{
      console.log("project List=>",res.data)

      for(let i=0;i<res.data.length;i++){
        projectList[i]=res.data[i]
      }

      localStorage.setItem("projectList",JSON.stringify(projectList))
      
      
    })
    .catch((err)=>{
      console.log("Error projectList=>",err)
    })


    console.log(JSON.parse(localStorage.getItem("projectList")))

 

  


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

        <div style={{color:'White', fontSize:20}}>Bug Tracker</div>


        
        
        <List>
       
            <Button ghost style={profileBtnStyle} onClick={openCreateProject}>Create New Project</Button>
        

        
            <Button ghost style={profileBtnStyle} >Project Team</Button>
            <Button ghost style={profileBtnStyle} onClick={Refresh}>Refresh</Button>
         

        </List>

        <Drawer title ="Create New Project" placement="left" onClose={closeCreateProject} open={createProjectOnOff}>

          <CreateProjectForm/>

        </Drawer>
      
      
      
      
      
      
      </Sider>
      <Layout>
        <Header style={headerStyle}>My Projects</Header>
        <Content style={contentStyle}>

        <Table columns={columns} dataSource={JSON.parse(localStorage.getItem("projectList"))} />

        </Content>
        
      </Layout>
    </Layout>
  </Space>
)};
export default Profile;