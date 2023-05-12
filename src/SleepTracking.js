import { Row, Col, Card, Typography, Input, DatePicker, TimePicker, Slider, Button, Progress , Space } from 'antd';

const { Title } = Typography;
const { RangePicker } = DatePicker;

export function SleepTracking() {
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // Add logic to submit sleep data to server or store locally
  };

  return (
    <div style={{width :"96vw" , height:"100vh" }}>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={3}>Sleep Tracking</Title>
      </Col>
      <Col xs={24} sm={12}>
        <Card title="Enter Sleep Data" >
          <form onSubmit={handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={5} style={{marginBottom: '8px'}}>Hours of Sleep</Title>
                <Input size="large" placeholder="Enter hours of sleep" />
              </Col>

              <Col span={24}>
                <Title level={5} style={{marginBottom: '8px'}}>Today's Sleep Time</Title>
                <TimePicker.RangePicker size="large" />
              </Col>
              <Col span={24}>
                <Title level={5} style={{marginBottom: '8px'}}>Today's Sleep Quality</Title>
                <Slider defaultValue={50} />
              </Col>
              <Col span={24}>
                <Button type="primary" htmlType="submit" size="large" style={{marginBottom: '8px'}}>Submit</Button>
              </Col>
            </Row>
          </form>
        </Card>
      </Col>
      <Col xs={24} sm={12}>
        <Card title="Sleep Data Visualization" >
          <Space direction="vertical" style={{textAlign: 'center'}}>
            <Title level={5} style={{marginBottom: '8px'}}>Sleep Quality Progress</Title>
            <Progress type="circle" percent={75} strokeWidth={12} strokeColor="#1890ff" />
            <Title level={5} style={{marginBottom: '8px', marginTop: '24px'}}>Hours of Sleep Progress</Title>
            <Progress type="circle" percent={100} strokeWidth={12} strokeColor="#52c41a" />
        </Space>
        </Card>
    </Col>
    </Row>
    </div>
    )
}
