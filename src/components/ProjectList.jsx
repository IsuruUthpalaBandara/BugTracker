import React from 'react';
import { Space, Table, Tag ,Button} from 'antd';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


const ProjectList = () =>{

  const navigate = useNavigate()

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


  



  /*const data = [
    {
      key: '1',
      projectName: 'Bug Tracker',
      description: 'An app to track and monitor bugs of a project',
      author: 'isuru',
      addedDate: '05-08-2023'
    }
  
  ];

  */





  return(

    <>
    
    

    <Table columns={columns} dataSource={JSON.parse(localStorage.getItem("projectList"))} />
    <Button onClick={Refresh}>Refresh</Button>
    
    </>

    
  )}

export default ProjectList;