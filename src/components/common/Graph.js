import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2';
import axios from 'axios';

import { Button, Popover } from 'antd';
// import FiltersForm from './FilterForm';
import GraphFilterForm from './GraphFilterForm';

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
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [5, 20, 30, 12, 7, 27, 0, 0, 0, 0, 0, 0],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(100,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [25, 12, 30, 12, 7, 27, 0, 0, 100, 0, 0, 0],
    },
  ],
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

  useEffect(() => {
    axios
      .get('https://labs27-d-hrf-api.herokuapp.com/incidents/dummy')
      .then(res => {
        console.log('data', res.data);
      })
      .catch(err => {
        console.log(err.data);
      });
  }, []);

  return (
    // {<GraphFilter>}
    <div
      style={{
        backgroundColor: '#191A1A',
        margin: '0 auto',
        maxWidth: '1550px',
      }}
    >
      <Bar type="bar" data={data} options={options} />
      <Popover
        placement="bottomRight"
        title="Filter this graph!"
        content={<GraphFilterForm />}
        trigger="click"
      >
        <Button type="primary">Filters</Button>
      </Popover>
    </div>
  );
};

export default Graph;
