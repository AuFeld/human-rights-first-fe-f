import {
  Button,
  Popover,
  Form,
  Input,
  Popconfirm,
  DatePicker,
  Select,
} from 'antd';
import React, { useState } from 'react';

export default function SubmitIncident() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    date: '',
    location: '',
    category: '',
    description: '',
    email: '',
  });

  //   const handleChanges = e => {
  //     e.persist();
  //     setUserDetails({
  //       ...userDetails,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <div className="submission-form">
      <Form
        // onValuesChange={handleChanges}
        {...formLayout}
        name="basic"
      >
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please enter date!' }]}
          style={{ width: 500 }}
        >
          <Input placeholder="MM/DD/YYYY" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please enter Location!' }]}
          style={{ width: 500 }}
        >
          <Input placeholder="City, State" />
        </Form.Item>

        <Form.Item
          label="Type of force used"
          name="category"
          rules={[{ required: true, message: 'Please choose at least one!' }]}
          style={{ width: 500 }}
        >
          <Select className="category" placeholder="Select..." />
        </Form.Item>

        <Form.Item
          label="Description of incident"
          style={{
            width: 500,
          }}
        >
          <Input.TextArea
            id="description"
            placeholder="Please describe the details of the incident"
          />
        </Form.Item>

        <Form.Item {...tailLayout} style={{ width: 500 }}>
          <Button type="primary" htmlType="submit">
            {' '}
            SUBMIT{' '}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
