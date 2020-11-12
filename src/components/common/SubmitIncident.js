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
import { Justify } from 'react-bootstrap-icons';

export default function SubmitIncident() {
  const { Option } = Select;
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
    <div
      className="submission-form"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
      }}
    >
      <Form
        // onValuesChange={handleChanges}
        {...formLayout}
        name="basic"
      >
        <Form.Item
          label="Date"
          name="date"
          placeholder="11/03/2020"
          rules={[{ required: true, message: 'Please enter date.' }]}
          style={{ width: 500 }}
        >
          <Input placeholder="MM/DD/YYYY" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please enter Location' }]}
          style={{ width: 500 }}
        >
          <Input placeholder="City, State" />
        </Form.Item>

        <Form.Item
          label="Type of force used:"
          name="category"
          rules={[{ required: true, message: 'Please choose at least one!' }]}
          tooltip="The categories outlined here were taken from the National Institute of Justice' Use of Force Continuum. For more information, please visit: https://nij.ojp.gov/topics/articles/use-force-continuum "
          style={{ width: 490 }}
        >
          <Select className="category" mode="multiple" showArrow allowClear>
            <Option value="vocalization">Vocalization</Option>
            <Option value="soft technique">Soft Technique</Option>
            <Option value="hard technique">Hard Technique</Option>
            <Option value="blunt force">Blunt Force</Option>
            <Option value="projectiles">Projectiles</Option>
            <Option value="chemical">Chemical</Option>
            <Option value="lethal force">Lethal Force</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Description of incident"
          name="description"
          style={{
            width: 500,
          }}
        >
          <Input.TextArea
            id="description"
            placeholder="Please describe the incident in detail"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email.' }]}
          style={{ width: 500 }}
        >
          <Input placeholder="City, State" />
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
