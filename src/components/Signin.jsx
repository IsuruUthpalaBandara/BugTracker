import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';


const Signin = () => {

  const navigate = useNavigate()

  const onFinish = (values) => {
    //console.log('Success:', values);

    Axios.post('http://localhost:3001/api/signin',{
      userName:values.userName,
      userEmail:values.userEmail,
      userPassword:values.userPassword
    }).then((res)=>{
      console.log('signin res=>',res)
      navigate('/')
      alert("please login")
    })
    .catch((err)=>{
      console.log('signin err=>',err)
      alert('signing in failed!')
    })


  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  return(
    <>
    <h1>Sign In</h1>
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
      label="Name"
      name="userName"
      type='text'
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

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
export default Signin;