import React from 'react'
import {Form, Input, Button} from 'antd'
import Axios from 'axios'

export default function CreateProjectForm() {

  
  const createProjcet=(values)=>{

    
    const project=values

    ////////////API REQUEST/////////// 

    Axios.post("http://localhost:3001/api/createproject",{

      projectName:project.projectName,
      projectCreator:project.projectCreator,
      projectPassword:project.projectPassword

    }).then((res)=>{
      console.log("project creation response=>",res)
      console.log("project created!!!")
      
    }).catch((err)=>{
      console.log("project creation error=>",err)
    })




  


  }



  return (
    <>
  <Form
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
    onFinish={createProjcet}
   
    autoComplete="off"
  >
        <Form.Item
      label="Project Name"
      name="projectName"
      type='text'
      rules={[
        {
          required: true,
          message: 'Please input your project name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Created by :"
      name="projectCreator"
      rules={[
        {
          required: true,
          message: 'Please input the creator name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Set Password :"
      name="projectPassword"
      rules={[
        {
          required: true,
          message: 'Please set a password for your project',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    



    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Create Project
      </Button>
    </Form.Item>
  </Form>


    
    

    </>
    
  )
}
