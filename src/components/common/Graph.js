import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2';
import axios from 'axios';

import { Layout, Button, Popover, Row, Col, Statistic, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import GraphFilterForm from './GraphFilterForm';
import { keyframes } from 'styled-components';

const { Content } = Layout;
const { Text } = Typography;

// This random Array in Range is used to seed dummy data that is rendered on the bar chart
const randomArrayInRange = (min, max, n) =>
  Array.from(
    {
      length: n,
    },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const randomNumParams = {
  min: 1,
  max: 15,
  n: 12,
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const initialData = {
  labels: months,
  datasets: [
    {
      label: 'Vocalization (?)',
      backgroundColor: 'rgba(0, 184, 148, .2)',
      borderColor: 'rgb(0, 184, 148)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(85, 239, 196, 0.2)',
      hoverBorderColor: 'rgb(85, 239, 196)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
    {
      label: 'Soft Technique (?)',
      backgroundColor: 'rgba(9, 132, 227,.2)',
      borderColor: 'rgba(9, 132, 227, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(116, 185, 255, .4)',
      hoverBorderColor: 'rgb(116, 185, 255)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
    {
      label: 'Hard Technique (?)',
      backgroundColor: 'rgba(214, 48, 49, 0.2)',
      borderColor: 'rgba(214, 48, 49, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(250, 177, 160, 0.4)',
      hoverBorderColor: 'rgb(250, 177, 160)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
    {
      label: 'Blunt Impact (?)',
      backgroundColor: 'rgba(232, 67, 147, .2)',
      borderColor: 'rgb(232, 67, 147)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(253, 121, 168, 0.4)',
      hoverBorderColor: 'rgba(253, 121, 168, 1)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
    {
      label: 'Conducted Energy Devices (?)',
      backgroundColor: 'rgba(253, 203, 110, .3)',
      borderColor: 'rgb(253, 203, 110)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 234, 167, .4)',
      hoverBorderColor: 'rgb(255, 234, 167)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
    {
      label: 'Chemical (?)',
      backgroundColor: 'rgba(108, 92, 231, .2)',
      borderColor: 'rgba(108, 92, 231, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(162, 155, 254, 0.4)',
      hoverBorderColor: 'rgb(162, 155, 254)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
    {
      label: 'Lethal Force (?)',
      backgroundColor: 'rgba(255,99,132, .2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(214, 48, 49, 0.2)',
      hoverBorderColor: 'rgba(214, 48, 49, 1)',
      data: randomArrayInRange(
        randomNumParams.min,
        randomNumParams.max,
        randomNumParams.n
      ),
    },
  ],
};

const initialIncidentsCount = {};

const options = {
  responsive: true,
  legend: {
    display: true,
    labels: {
      fontSize: 16,
      padding: 32,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        beginAtZero: true,
        scaleLabel: {
          fontSize: 20,
          lineHeight: 2,
          display: true,
          labelString: '# of incidents',
        },
        ticks: {
          autoSkip: false,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        beginAtZero: true,
        scaleLabel: {
          fontSize: 20,
          lineHeight: 2,
          display: true,
          labelString: 'Timeline',
        },
        ticks: {
          autoSkip: false,
        },
      },
    ],
  },
};

const Graph = () => {
  const incidentTypes = useSelector(state => state.filters.incidents);
  const [data, setData] = useState(initialData);

  const initialTotal = 0;
  const [incidentCounts, setincidentCounts] = useState(initialIncidentsCount);
  const [total, setTotal] = useState(initialTotal);

  async function sumTheDeaths(incidentCounts) {
    var vals = await Object.values(incidentCounts);
    setTotal(vals[8]);
  }

  async function getincidentCounts() {
    await axios
      .get(
        'http://human-rights-first-api.eba-rb7uzmhr.us-east-1.elasticbeanstalk.com/getcount'
      )
      .then(res => setincidentCounts(JSON.parse(res.data)))
      .catch(err => {
        console.log(err);
      });
  }

  // Initially we expected lethal occurances to be in multiple categories of array, so we invoked a reducer to sum these.
  sumTheDeaths(incidentCounts);
  useEffect(() => {
    getincidentCounts();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#dfe6e9',
        margin: '0 auto',
        maxWidth: '1550px',
      }}
    >
      <Layout>
        <Content>
          <Bar type="bar" data={data} options={options} />
          <Row gutter={16}>
            <Col offset={8}>
              <Text type="secondary">
                The data above is randomly generated and will be updated with
                real data in a future release.
              </Text>
            </Col>
          </Row>
          <br></br>
          <Row gutter={16}>
            <Col span={6} offset={0}>
              <Popover
                placement="topLeft"
                title="Filter Incident Data"
                content={<GraphFilterForm />}
                trigger="click"
              >
                <Button type="primary"> Filters </Button>
              </Popover>
            </Col>
            <Col span={6} offset={6}>
              <Statistic
                title="Total Deaths"
                value={total}
                prefix={<ExclamationCircleOutlined />}
                valueStyle={{
                  color: '#cf1322',
                }}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Graph;
