import {  Button, Table , Input, Form ,Drawer, DatePicker, Checkbox} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Axios from 'axios'
import React,{ useEffect, useState} from 'react'



const columns = [
  {
    title: 'bugNo',
    dataIndex: 'bugNo',
    key: 'bugNo',
    
  },
  {
    title: 'bugName',
    dataIndex: 'bugName',
    key: 'bugName',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },

  {
    title: 'Status',
    key: 'Status',
    dataIndex: 'Status',
   
  },
  {
    title: 'Fixing Date',
    key: 'dueDate',
    dataIndex:'dueDate',
  },
  {
    title: 'Time Left',
    key: 'timeLeft',
    dataIndex:'timeLeft',
  },
  {
    title: 'Fixing Method',
    dataIndex: 'fixingMethod',
    key: 'fixingMethod',
  },
  {
    title: 'Responsibility',
    dataIndex: 'Responsibility',
    key: 'Responsibility',
  },
];






const Project = () => {



  ////LOACL STORAGE////

  

  /////////////////////

  const [currentProject,setCurrentProject]=useState({})
  const [openAddBug,setOpenAddBug]=useState(false)
  const [bugNo,setBugNo]=useState(0)
  const [bugForm,setBugForm]=useState([])

 
  const addBug=()=>{setOpenAddBug(true)}
  const onClose=()=>{setOpenAddBug(false)}

   const LoadProject=(values)=>{

  
    
    setCurrentProject(JSON.parse(localStorage.getItem(values.projectName)))
    console.log(currentProject)
  
    
    /*Axios.post('http://localhost:3001/api/projects',{
      projectName:values.projectName    
    })
    .then((res)=>{
      
      setCurrentProject(res.data)
      console.log("currentProject=>",JSON.stringify(currentProject))
  
    })
    .catch((err)=>{
      console.log('error loading project =>',err)
    })
    .finally(
      
    
    
    )*/
  
  }


  const saveBug=(values)=>{


    values.bugNo=bugNo+1
    console.log(bugForm)
    bugForm.push(values)
    currentProject.bugReport=bugForm
    console.log("Project=>",JSON.stringify(currentProject))
    setBugNo(bugNo+1)
    setCurrentProject(currentProject)
    localStorage.setItem(currentProject.projectName,JSON.stringify(currentProject))
    
   }

 return(
  <>

  <div  style={{marginTop:10, display:'flex'}}>

<Form
    layout={'inline'}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={LoadProject}
    
    autoComplete="off"
  >

<Form.Item
style={{width:300}}
      label="Project Name : "
      name="projectName"
      rules={[
        {
          required: true,
          message: 'Please input the project name to open!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" style={{marginLeft:0}}>
        Load Project
      </Button>
    </Form.Item>

    </Form>

    <Form.Item
    style={{marginLeft:50}}>

      <Button onClick={addBug}>Add Bug +</Button>
      <Drawer title="Add New Bug" placement="right" onClose={onClose} open={openAddBug}>

        <Form onFinish={saveBug}>
         <Form.Item
          style={{width:300}}
          label="Bug Name : "
          name="bugName"
          rules={[
            {
              required: true,
              message: 'Enter bug name',
            },
                ]}
                    >
          <Input />
          

          </Form.Item>

          <Form.Item
          style={{width:300}}
          label="Description : "
          name="Description"
          rules={[
            {
              required: false,
              message: 'Bug Description Here',
            },
                ]}
                    >
          <TextArea rows={4} />
          

          </Form.Item>

          <Form.Item
          
                    label="Status: "
                    name="Status"
                    valuePropName='checked'
                    
                    
                    >

          
               <Checkbox>Fixed</Checkbox>
          </Form.Item>

          <Form.Item
          style={{width:300}}
          label="Due Date: "
          name="dueDate"

          >
            <DatePicker/>

          </Form.Item>

          <Form.Item
          style={{width:300}}
          label="Fixing Method : "
          name="fixingMethod"
          
          rules={[
            {
              required: false,
              message: 'Add how to fix this',
            },
                ]}
                    >
          <TextArea rows={4} />
          

          </Form.Item>

          <Form.Item
            label="Responsibility : "
           name="Responsibility"
            >
             <Input/>

             </Form.Item>

             <Form.Item>
              <Button htmlType="submit">Save</Button>
             </Form.Item>


        </Form>

      </Drawer>

    </Form.Item>




    </div>


    <div style={{marginTop:"10px"}}><h4>Currently Loaded : {currentProject.projectName}</h4></div>

  

    <Table 
    columns={columns} 
    dataSource={currentProject.bugReport} 
    pagination={false} 
    style={{marginTop:10}} 
    
   />
   

    </>

 )};

export default Project;