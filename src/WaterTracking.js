import React, { useState } from 'react';
import { Layout, Input, Button, Progress } from 'antd';

const { Content } = Layout;

const WaterTracking = () => {
  const [goal, setGoal] = useState(64); // ounces
  const [consumed, setConsumed] = useState(0); // ounces

  const handleChange = (value) => {
    setConsumed(value);
  };
  const handleReset = () => {
    setConsumed(0);
  };
  const handleSubmit = (value) => {
    //some logic 
    setConsumed(0);
    alert('You have submitted for the day ');
  };
  const handleAdd = () => {
    setConsumed(consumed + 8);
  };

  return (
    <Layout>
      <Content style={{ padding: '50px',minWidth: '96vw', minHeight: '100vh', maxHeight:"fit-content" }}>
        <h1>Water Tracker</h1>
        <div style={{width: '90vw', height: '400px', display: 'flex', justifyContent: 'center', alignItems:"center"}}>
          <Progress
            type="circle"
            percent={(consumed / goal) * 100}
            format={() => `${consumed} oz`}
            width={300}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  margin:"20px" }}>
          <Input
            type="number"
            placeholder="Add amount consumed (oz)"
            value={consumed}
            onChange={(e) => handleChange(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <Button type="primary" onClick={handleAdd}>
            Add 8 oz
          </Button>
          <Button onClick={handleReset}>
            Reset
          </Button>

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
          
        </div>
       
      </Content>
    </Layout>
  );
};

export default WaterTracking ;
