import React, { useState } from 'react';
import { Layout, Form, Input, InputNumber, Select, Button, message, Modal } from 'antd';
import './Personal_Info.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const activityData = [  { label: 'Walked 1 mile', points: 10 },{ label: 'Did Cardiac Wrokout', points: 30 },  { label: 'Ran 1 mile', points: 20 },  { label: 'Biked 5 miles', points: 30 },  { label: 'Swam 20 laps', points: 40 },];

const Personal_Info = () => {
  const [userData, setUserData] = useState({
    weight: 70,
    height: 170,
    age: 30,
    gender: 'male',
    disease: 'None',
    points: 0,
  });

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isEditable, setIsEditable] = useState(false);

  const handleActivity = (points) => {
    setUserData({
      ...userData,
      points: userData.points + points,
    });
    message.success('Activity recorded successfully');
  };

  const onFinish = (values) => {
    setUserData({
      weight: values.weight,
      height: values.height,
      age: values.age,
      gender: values.gender,
      disease: values.disease,
      points: userData.points,
    });
    setVisible(false);
    setIsEditable(false);
  };

  const showModal = () => {
    setVisible(true);
    setIsEditable(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setIsEditable(false);
  };

  return (
    <Layout>
       <div className='container'> 
        <div className="logo" >
        <h2>PERSONAL INFO</h2><br></br>
        </div>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div className="user-info">
            <div className="user-data">
              <div className="personal-info">
                <div className="image-container">
                  <img src="info.gif" alt="User Profile" />
                </div>
                <div className="info-container">
                  <div className="info-item">
                    <p>Weight: </p>
                    <span>{userData.weight} kg</span>
                  </div>
                  <div className="info-item">
                    <p>Height: </p>
                    <span>{userData.height} cm</span>
                  </div>
                  <div className="info-item">
                    <p>Age: </p>
                    <span>{userData.age} years</span>
                  </div>
                  <div className="info-item">
                    <p>Gender: </p>
                    <span>{userData.gender}</span>
                  </div>
                  <div className="info-item">
                    <p>Disease: </p>
                    <span>{userData.disease}</span>
                  </div>
                  <br></br><br></br>
                  <Button className='editbtn' type="primary" onClick={showModal}>
                    Edit Personal Info
                </Button>
                </div>
              </div>
   
              
            </div>
           
            <Modal
              title="Edit Personal Info"
              visible={visible}
              onCancel={handleCancel}
              footer={null}
            >
              <Form
                form={form}
                name="user-data"
                initialValues={{
                  weight: userData.weight,
                  height: userData.height,
                  age: userData.age,
                  gender: userData.gender,
                  disease: userData.disease,
                  medication: userData.medication,
                }}
                onFinish={onFinish}
              >
                          <Form.Item
              label="Weight"
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Please input your weight!",
                },
              ]}
            >
              <InputNumber min={1} max={999} />
            </Form.Item>
            <Form.Item
              label="Height"
              name="height"
              rules={[
                {
                  required: true,
                  message: "Please input your height!",
                },
              ]}
            >
              <InputNumber min={1} max={999} />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <InputNumber min={1} max={120} />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender!",
                },
              ]}
            >
              <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Disease" name="disease">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="user-activity">
        <h2>Activity Tracker:</h2>
        <div className="activity-list">
          {activityData.map((activity) => (
            <div className="activity-item" key={activity.label}>
              <p>{activity.label}</p>
              <Button type="primary" onClick={() => handleActivity(activity.points)}>
                Add
              </Button>
            </div>
          ))}
        </div>
        <div className="total-points">
          <br></br>
          <p>Total Points: {userData.points}</p>
        </div>
      </div>
    </div>
  </Content>
  </div>
  </Layout>

);
};

export default Personal_Info;

