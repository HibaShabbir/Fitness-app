import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';


export function Feedback () {
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleFeedbackSubmit = (values) => {
      console.log(values); // replace with your desired behavior
      setModalVisible(false);
    };
  
    return (
      <>
        <Button onClick={() => setModalVisible(true)}>Give feedback</Button>
        <Modal
          title="Feedback"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleFeedbackSubmit}>
            <Form.Item
              label="Your feedback"
              name="feedback"
              rules={[{ required: true, message: 'Please enter your feedback' }]}
            >
              <Input.TextArea placeholder="Enter your feedback here" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </>
    );
  };
    