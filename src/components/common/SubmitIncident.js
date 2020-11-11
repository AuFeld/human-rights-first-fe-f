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
      <Form onValuesChange={handleChanges}>
        <Input id="date" placeholder="date" />
        <Input id="location" placeholder="location" />
        <Select className="category" />
        <Input.TextArea id="description" placeholder="description" />
        <Button> SUBMIT </Button>
      </Form>
    </div>
  );
}
