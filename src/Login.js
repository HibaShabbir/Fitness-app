import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography , Row, Col, Card} from "antd";
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

export function Login(props) {
  const { onLogin } = props;
  const navigate = useNavigate(); // Initialize the useHistory hook
  const [form] = Form.useForm();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignup =()=>{
    navigate('/signup');
  }
  const onFinish = (values) => {
    var found = true;
    var admin= false;
    // Perform login logic here

    // Perform form validation
    if (!values.name || !values.password) {
      alert("Please fill all fields.");
      return;
    }

    if (found && admin){
      onLogin.handleAdmin();
    }
    else if(found && !admin){
      onLogin.handleLogin();
    } 
    else {
      alert("This user does not exist.");
    }
  };

  return (
    <Card style={{ minWidth: "96vw", minHeight: "100vh", maxHeight: "fit-content", maxWidth: "fit-content" }}>
       <Row gutter={[32, 32]} justify="center" align="middle">
       <Col>
        <img src="FitnessApps.gif" height="600px" width="500px" alt="fitness"></img>
      </Col>

      <Col>
        <Title style={{ textAlign: "center" }}>FITNESS AND HEALTH APP</Title>

        <Form form={form} onFinish={onFinish} >
        
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
          labelCol={{ span: 6 }} // set the span for the label column
          wrapperCol={{ span: 18 }} // set the span for the wrapper column
        >
          <Input placeholder="Username" />
        </Form.Item>

          <Form.Item 
          label ="Password" 
          name="password" 
          rules={[{ required: true, message: 'Please input your password!' }]}
          labelCol={{ span: 6 }} 
          wrapperCol={{ span: 18 }}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item 
          labelCol={{ span: 6 }} 
          wrapperCol={{ span: 18 }}
          justify="center" align="middle"
          >
            
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" onClick={handleSignup}>
              Sign Up
            </Button>
             
          </Form.Item>
         
        </Form>
      </Col>
       </Row>
    </Card>
  );
}

export default Login;
