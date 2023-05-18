import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate, Outlet} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const ProjectSignIn = () => {

    const navigate=useNavigate()

    const onOpenProject = (values) => {
        //console.log('Success:', values);

        navigate('project')
       
      };
      
return(
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
    onFinish={onOpenProject}
    
    autoComplete="off"
  >
    <Form.Item
      label="Project Name"
      name="projectName"
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
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your project password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Open Project
      </Button>
    </Form.Item>
    <Outlet/>
  </Form>
  
)};
export default ProjectSignIn;