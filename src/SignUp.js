import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export function SignUp() {
  const [error, setError] = useState(null);

  const handleFinish = (values) => {
    // Perform validation on fields
    if (!values.email || !values.password || !values.gender || !values.height || !values.weight || !values.age || !values.gender) {
      setError('Please enter all the fields');
      return;
    }
  };

  return (
    <div style={{ minWidth: "96vw", minHeight: "100vh", maxHeight: "fit-content", maxWidth: "fit-content" }}>
      <div className='container'>
        <h1>Login</h1>
        <br />
        {error && <div className="error">{error}</div>}
        <div className='form-container'>
          <Form onFinish={handleFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input type="number" placeholder="Age" />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: 'Please select your gender!' }]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Height"
              name="height"
              rules={[{ required: true, message: 'Please input your height!' }]}
            >
              <Input type="number" placeholder="Height" />
            </Form.Item>

            <Form.Item
              label="Weight (in kg)"
              name="weight"
              rules={[{ required: true, message: 'Please input your weight!' }]}
            >
              <Input type="number" placeholder="Weight" />
            </Form.Item>

            <Form.Item
              label="Disease (if any)"
              name="disease"
            >
              <Input placeholder="Disease" />
            </Form.Item>

            <Form.Item
              label="Allergic to food (if any)"
              name="food"
            >
              <Input placeholder="Allergic to food" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className='img-container'>
          <img src='Signup.gif' alt="Signup" />
        </div>
      </div>
    </div>
  );
}
