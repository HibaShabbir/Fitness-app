import { Button, ConfigProvider,DatePicker , Breadcrumb, theme } from 'antd';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { HeartOutlined, BarChartOutlined, CalendarOutlined, MedicineBoxOutlined, } from '@ant-design/icons';

import React from 'react';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { Sidebar } from './Sidebar.js';


export function HomePage (){
  const { Header, Content } = Layout;
  const { Title, Paragraph } = Typography;
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const handleClick = () => {
   setIsDarkMode((previousValue) => !previousValue);
  };
  
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return(

    <Card style={{ width: "100vw", height:"100vh" }}>
      <div style={{ display: 'flex', flexDirection:'row' }}>
        <Sidebar></Sidebar>
        <div style={{ margin:"20px", paddingLeft:"50px"  }}>
        <Content style={{ padding: '50px' }}>
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable>
                <HeartOutlined style={{ fontSize: '64px' , color:'#1890ff' }} />
                <Title level={3}>Track your progress</Title>
                <Paragraph>
                  Record your workouts and track your progress over time with our simple and intuitive interface.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable>
                <BarChartOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                <Title level={3}>Analyze your data</Title>
                <Paragraph>
                  Get insights into your performance and see how you're improving over time with our powerful analytics tools.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable>
                <CalendarOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                <Title level={3}>Plan your workouts</Title>
                <Paragraph>
                  Schedule your workouts and stay on track with our built-in calendar and reminder system.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} sm={12} lg={8}>
            <Card hoverable>
            <i class="fas fa-utensils"style={{ fontSize: '64px', color: '#1890ff' }} ></i>
              <Title level={3}>Nutrition plan</Title>
              <Paragraph>
                Create and follow a personalized nutrition plan to meet your fitness goals.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
          <i class="fas fa-tint" style={{ fontSize: '64px', color: '#1890ff' }}  />
            <Title level={3}>Water tracking</Title>
            <Paragraph>
              Monitor your daily water intake and stay hydrated with our easy-to-use water tracking feature.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <MedicineBoxOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
            <Title level={3}>Medicines</Title>
            <Paragraph>
              Keep track of your medicines and set reminders for when to take them with our medication tracking feature.
            </Paragraph>
          </Card>
        </Col>
        <Col span={24}>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Button type="primary" size="large">Get Started</Button>
          </div>
        </Col>
          </Row>
        </Content>
        </div>
      </div>

   </Card>
);
} 