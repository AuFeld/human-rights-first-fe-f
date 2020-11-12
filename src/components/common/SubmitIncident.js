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

  const handleChanges = e => {
    e.persist();
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const formLayout = {};

  return (
    <div className="submission-form">
      <Form onValuesChange={handleChanges} layout="vertical">
        <Form.Item label="date">
          <Input id="date" placeholder="date" />
        </Form.Item>
        <Form.Item label="location">
          <Input id="location" placeholder="location" />
        </Form.Item>
        <Form.Item
          label="category"
          tooltip="The categories outlined here were taken from the National Institute of Justice' Use of Force Continuum. For more information, please visit: https://nij.ojp.gov/topics/articles/use-force-continuum "
        >
          <Select className="category" />
        </Form.Item>
        <Form.Item>
          <Input.TextArea id="description" placeholder="description" />
        </Form.Item>
        <Form.Item>
          <Input id="date" placeholder="date" />
        </Form.Item>
        <Form.Item>
          <Input id="email" placeholder="jane.doe.com" />
        </Form.Item>
        <Button> SUBMIT </Button>
      </Form>
    </div>
  );
}
