import React, {useState} from 'react';
import { Form, Input, Checkbox, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Signup() {

  const [form] = Form.useForm();

  const[formData,setFormData]= useState({
   name: '',
   email: '',
   password: '',
})

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    // Log formData to check its values
  console.log('formData:', formData);
  
    try {
      const response = await axios.post("http://localhost:8000/api/signup", formData, {
  headers: {
    'Content-Type': 'application/json',
  },
});

    

          if (response.ok) {
        // Handle successful signup, e.g., redirect to login page
        message.success('Signup successful. Please log in.');
        form.resetFields(); // Clear the form fields
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Signup error:', error.response);
      message.error('An error occurred during signup. Please try again later.');
    }
  }

   return (
    <Form
    name="basic"
    form={form}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
        height: '484px',
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
    <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', paddingLeft:'20%' }}>SIGNUP PAGE</h2> 
    
   </Form.Item>

   <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input yourName!',
        },
      ]}
    >
      <Input name="name" onChange={handleChange} />
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
     <div style={{ display: 'flex', flexDirection: 'row',paddingLeft:'20%' }}>Already a member ?< span style={{color:'black'}}> <Link to='/login'>Log in</Link> </span></div> 
     
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
      <Button type="primary" htmlType="submit"  onClick={handleSubmit}>
        Signup
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Signup
