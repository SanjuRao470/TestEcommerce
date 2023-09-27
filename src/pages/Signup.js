import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Signup() {
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
        height: '484px',
        // display:'flex',
        // flexDirection:'column',
        // justifyContent:'center',
        // paddingLeft:'20%',
        // color: '#7665a0 ',
        // lineHeight: '160px',
        // textAlign: 'center',
        backgroundColor: "#def3f6",
        paddingTop: '2%',
        paddingRight: '5%',
      maxWidth: 600,
      margin:'auto',
      marginTop: '2%'
    //   border:'1px solid',
    //   border: '1px solid',
    //   padding: '10px',
    //   boxShadow: '5px 10px #fff',
    // height: 310px;
    // background-color: rgb(222, 243, 246);
    // max-width: 600px;
    // padding-top: 2%;
    // padding-right: 5%;
    // margin: 20px auto auto;
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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Mobil Number"
      name="mobilno"
      rules={[
        {
          required: true,
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
          message: 'Please input your password!',
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
      <Button type="primary" htmlType="submit">
        Signup
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Signup
