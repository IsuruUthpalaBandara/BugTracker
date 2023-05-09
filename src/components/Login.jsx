import { useNavigate, Outlet } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import Axios from 'axios'



const Login = () => {

  const navigate=useNavigate()

  const onFinish = (values) => {


 
    //console.log('Success:', values);
  
    Axios.post('http://localhost:3001/api/login',{
      userEmail:values.userEmail,
      userPassword:values.userPassword
    }).then((res)=>{
      console.log('login res=>',res)
      navigate('/')
      alert('now you can start bug tracking work')
    })
    .catch((err)=>{
      console.log('login err=>',err)
      alert("Login failed!")
    })

    
    
  
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <>
    <h1>Login</h1>
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
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="userEmail"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="userPassword"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
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
        Submit
      </Button>
    </Form.Item>
  </Form>
  
  </>
)};
export default Login;