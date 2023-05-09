import React from 'react'
import {Form, Input, Button} from 'antd'
import Axios from 'axios'

export default function CreateProjectForm() {

  
  const createProjcet=(values)=>{

    
    const project=values

    project.bugReport=[]


    ///////LOCAL STORAGE///////
    
    localStorage.setItem(values.projectName,JSON.stringify(project))

    console.log("created =>",project.projectName)
    
    
    ////////////


  


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
