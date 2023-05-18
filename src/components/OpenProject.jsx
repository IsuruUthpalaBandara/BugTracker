import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'

const OpenProject = () => {

    const navigate=useNavigate()

    const onOpenProject = (values) => {
        //console.log('Success:', values);


        Axios.post("http://localhost:3001/api/loadproject",{
          projectName:values.projectName,
          projectPassword:values.password
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
    
  </Form>
)};
export default OpenProject;