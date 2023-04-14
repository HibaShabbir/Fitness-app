import { Button, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { FaStar,FaThumbsUp} from "react-icons/fa";


export function Review () {
    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(0);
  
    const handleReviewSubmit = (values) => {
      console.log(values); // replace with your desired behavior
      setModalVisible(false);
    };
  
    return (
      <>
       <FaThumbsUp size={15} color="white" />&nbsp;&nbsp;
        <Button onClick={() => setModalVisible(true)}>Give Review</Button>
        <Modal
          title="Review"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleReviewSubmit}>
            <Form.Item
              label="Your review"
              name="review"
              rules={[{ required: true, message: 'Please give review of workout plans' }]}
            >
              <Input.TextArea placeholder="Enter your review here" />
            </Form.Item>

            <Form.Item>
            <label> Your Rating:&nbsp;&nbsp; &nbsp;</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                color={rating >= star ? "#1890ff" : "#c0c0c0"}
                onClick={() => setRating(star)}
                style={{ cursor: "pointer" }}
              />
            ))}

            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </>
    );
  };
    