import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/api/login", formData); // Replace with your backend API endpoint
      const { status, token } = response.data;
  
      if (status === 'success') {
        // Login successful; store the token securely (e.g., in local storage or cookies)
        localStorage.setItem('token', token); // Store the token in local storage
        navigate("/");
      } else {
        // Handle login failure and show an error message to the user
        setError('Invalid credentials');
      }
    } catch (error) {
      // Handle HTTP request error (e.g., network error)
      console.error('Login failed:', error);
    }
  };
  

  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
        height: '431px',
        backgroundColor: "#def3f6",
        paddingTop: '2%',
        paddingRight: '5%',
      maxWidth: 600,
      margin:'auto',
      marginTop: '5%'
  
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

<Form.Item
     
     wrapperCol={{
       offset: 8,
       span: 16,
     }}
   >
    <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', paddingLeft:'20%' }}>LOGIN PAGE</h2> 
    
   </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input name="email" onChange={handleChange} />
    </Form.Item>

 

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
     <Input.Password name="password" onChange={handleChange} />
    </Form.Item>

    <Form.Item
     
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
     <div style={{ display: 'flex', flexDirection: 'row',paddingLeft:'20%' }}>Not a Member ?< span style={{color:'black'}}><Link to='/signup'>Signup</Link> </span></div> 
     
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
      <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form.Item>
    
    {error && <p style={{ color: 'red' }}>{error}</p>}



  </Form>
  )
}

export default Login
