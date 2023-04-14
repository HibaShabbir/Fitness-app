import { Button, ConfigProvider,DatePicker , Breadcrumb, theme } from 'antd';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { HeartOutlined, BarChartOutlined, CalendarOutlined, MedicineBoxOutlined, } from '@ant-design/icons';

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useHistory hook from React Router
import { Sidebar } from './Sidebar.js';


export function HomePage (){
  const navigate = useNavigate(); // Initialize the useHistory hook

  const { Header, Content } = Layout;
  const { Title, Paragraph } = Typography;
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAnalyzeDataClick = () => {
    navigate('/sleep-tracking'); // Navigate to the SleepTracking page when the card is clicked
  };
  const handleClick = () => {
   setIsDarkMode((previousValue) => !previousValue);
  };
  
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return(

    <Card style={{ width: "fit-content", height:"fit-content" }}>
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
              <Card hoverable onClick={handleAnalyzeDataClick}>
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
        <Card>
        <Title level={2} style={{ marginTop: '50px' }}>Recommended Blogs</Title>
      <Row gutter={[32, 32]} justify="center" align="middle">
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable cover={<img alt="blog1" src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" style={{ height: '200px', objectFit: 'cover' }} />}>
            <Title level={3}>FitnessBlender</Title>
            <Paragraph>
              Free full-length workout videos for all fitness levels. HASfit stands for Heart And Soul fitness because we believe everyone deserves to be fit.
            </Paragraph>
            <Button type="primary">Visit Blog</Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable cover={<img alt="blog2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpZq_YnAaA3l1odEUpn9ULiQKrbtHxRrggg&usqp=CAU" style={{ height: '200px', objectFit: 'cover' }} />}>
            <Title level={3}>Tone It Up</Title>
            <Paragraph>
              Daily workout videos to tone every inch of your body. At Tone It Up we believe in whole body wellness.
            </Paragraph>
            <Button type="primary">Visit Blog</Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable cover={<img alt="blog3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU6JzzEtAKQZTzTylT_Mxx80vVnmJw-z-mw&usqp=CAU" style={{ height: '200px', objectFit: 'cover' }} />}>
            <Title level={3}>Nerd Fitness</Title>
            <Paragraph>
              Helping you lose weight, get stronger, live better. We help desk jockeys, nerds, and average Joes level up their lives.
            </Paragraph>
            <Button type="primary">Visit Blog</Button>
          </Card>
        </Col>
      </Row>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Button type="primary" size="large">View More</Button>
      </div>
        </Card>
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
