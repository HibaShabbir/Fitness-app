import React from 'react';
import { Layout, Row, Col, Input, Button, Select, Card, Pagination } from 'antd';
import './App.css';

const { Header, Content } = Layout;
const { Option } = Select;
const { Meta } = Card;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Fitness Blog Search</div>
      </Header>
      <Content className="content">
        <Row justify="center">
          <Col xs={24} md={12} lg={8}>
            <Input placeholder="Search for blogs" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Select placeholder="Select a category" style={{ width: '100%' }}>
              <Option value="fitness">Fitness</Option>
              <Option value="nutrition">Nutrition</Option>
              <Option value="mindfulness">Mindfulness</Option>
            </Select>
          </Col>
          <Col xs={24} md={12} lg={4}>
            <Button type="primary" style={{ width: '100%' }}>Search</Button>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24} md={20} lg={16}>
            <div className="blog-list">
              <Card
                hoverable
                cover={<img alt="blog post" src="https://picsum.photos/300/200" />}
              >
                <Meta title="Blog Post Title" description="Blog post description" />
              </Card>
              <Card
                hoverable
                cover={<img alt="blog post" src="https://picsum.photos/300/200" />}
              >
                <Meta title="Blog Post Title" description="Blog post description" />
              </Card>
              <Card
                hoverable
                cover={<img alt="blog post" src="https://picsum.photos/300/200" />}
              >
                <Meta title="Blog Post Title" description="Blog post description" />
              </Card>
            </div>
            <Pagination defaultCurrent={1} total={50} style={{ marginTop: 20}} />
          </Col>
        </Row>
      </Content>
    </Layout>
);
}