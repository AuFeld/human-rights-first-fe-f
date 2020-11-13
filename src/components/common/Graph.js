import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2';
import axios from 'axios';

import { Button, Popover, Row, Col, Statistic, Popconfirm } from 'antd';
import GraphFilterForm from './GraphFilterForm';
import { keyframes } from 'styled-components';

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
      data: [10, 11, 15, 6, 45, 2, 234],
    },
    {
      label: 'Soft Technique (?)',
      backgroundColor: 'rgba(9, 132, 227,.2)',
      borderColor: 'rgba(9, 132, 227, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(116, 185, 255, .4)',
      hoverBorderColor: 'rgb(116, 185, 255)',
      data: [10],
    },
    {
      label: 'Hard Technique (?)',
      backgroundColor: 'rgba(214, 48, 49, 0.2)',
      borderColor: 'rgba(214, 48, 49, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(250, 177, 160, 0.4)',
      hoverBorderColor: 'rgb(250, 177, 160)',
      data: [10],
    },
    {
      label: 'Blunt Impact (?)',
      backgroundColor: 'rgba(232, 67, 147, .2)',
      borderColor: 'rgb(232, 67, 147)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(253, 121, 168, 0.4)',
      hoverBorderColor: 'rgba(253, 121, 168, 1)',
      data: [10],
    },
    {
      label: 'Conducted Energy Devices (?)',
      backgroundColor: 'rgba(253, 203, 110, .3)',
      borderColor: 'rgb(253, 203, 110)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 234, 167, .4)',
      hoverBorderColor: 'rgb(255, 234, 167)',
      data: [10],
    },
    {
      label: 'Chemical (?)',
      backgroundColor: 'rgba(108, 92, 231, .2)',
      borderColor: 'rgba(108, 92, 231, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(162, 155, 254, 0.4)',
      hoverBorderColor: 'rgb(162, 155, 254)',
      data: [10],
    },
    {
      label: 'Lethal Force (?)',
      backgroundColor: 'rgba(255,99,132, .2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(214, 48, 49, 0.2)',
      hoverBorderColor: 'rgba(214, 48, 49, 1)',
      data: [10],
    },
  ],
};

const initialDeathCount = {
  // "Officer Presence": "1218",
  // "Nonthreatening Commands": "115",
  // "3. Threatening Commands": "425",
  // "4. Soft Technique": "83",
  // "5. Hard Technique": "1020",
  // "6. Blunt Impact": "838",
  // "7. Chemical": "1030",
  // "8. Conducted Enery Devices": "322",
  // "9. Lethal": "313"
};

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
  const [deathCounts, setDeathCounts] = useState(initialDeathCount);
  const [total, setTotal] = useState(initialTotal);

  async function sumTheDeaths(deathCounts) {
    var vals = await Object.values(deathCounts);
    let t = 0;
    const reducer = (acc, cv) => acc + cv;
    t = vals.reduce(reducer, 0);
    setTotal(t);
  }

  async function getDeathCounts() {
    await axios
      .get(
        'http://human-rights-first-api.eba-rb7uzmhr.us-east-1.elasticbeanstalk.com/getcount'
      )
      .then(res => setDeathCounts(JSON.parse(res.data)))
      .catch(err => {
        console.log(err);
      });
  }

  sumTheDeaths(deathCounts);

  useEffect(() => {
    getDeathCounts();
  }, []);

  return (
    // {<GraphFilter>}
    <div
      style={{
        backgroundColor: '#dfe6e9',
        margin: '0 auto',
        maxWidth: '1550px',
      }}
    >
      <Bar type="bar" data={data} options={options} />
      <Popover
        placement="bottomRight"
        title="Filter Incident Data"
        content={<GraphFilterForm />}
        trigger="click"
      >
        <Button
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            padding: '1em',
            fontSize: '2em',
          }}
          type="primary"
        >
          Filters
        </Button>
      </Popover>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total Deaths" value={total} />
        </Col>
      </Row>
    </div>
  );
};

export default Graph;
