import { Button, ConfigProvider,DatePicker , Breadcrumb, theme } from 'antd';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { HeartOutlined, BarChartOutlined, CalendarOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import React from 'react';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { Sidebar } from './Sidebar.js';


export default function App (){
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
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#8bbb11",
    },
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}
  >

    <Card style={{ width: "100vw", height:"100vh" }}>
    <NavBar/>
      <div style={{ display: 'flex', flexDirection:'row' }}>
        <Sidebar></Sidebar>
        <div style={{ margin:"20px", paddingLeft:"50px"  }}>
        <Breadcrumb items={[{ title: 'home' },{title:'app'}]} />
        <Button style={{ float :'right'  }} onClick={handleClick}>
          Change Theme to {isDarkMode ? "Light" : "Dark"}
        </Button>
        <>
          <Steps
            type="navigation"
            size="small"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              {
                title: 'Step 1',
                subTitle: '00:00:05',
                status: 'finish',
                description: 'This is a description.',
              },
              {
                title: 'Step 2',
                subTitle: '00:01:02',
                status: 'process',
                description: 'This is a description.',
              },
              {
                title: 'Step 3',
                subTitle: 'waiting for longlong time',
                status: 'wait',
                description: 'This is a description.',
              },
            ]}
          />
          <Steps
            type="navigation"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              {
                status: 'finish',
                title: 'Step 1',
              },
              {
                status: 'process',
                title: 'Step 2',
              },
              {
                status: 'wait',
                title: 'Step 3',
              },
              {
                status: 'wait',
                title: 'Step 4',
              },
            ]}
          />
        
        </>
        <DatePicker placeholder="select date" />
        </div>
      </div>

   </Card>
   
  </ConfigProvider>
);
} 