import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Button, Popover } from 'antd';
import FiltersForm from './FilterForm';

const Graph = () => {
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
        incidentId: 'all',
        label: 'All',
        data: [],
        borderColor: '#c0ba17',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      {
        incidentId: 'energyDevices',
        label: 'Energy Devices',
        data: [],
        borderColor: '#6127cb',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      {
        incidentId: 'softTechnique',
        label: 'Soft Technique',
        data: [],
        borderColor: '#8b5c30',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      {
        incidentId: 'hardTechnique',
        label: 'Hard Technique',
        data: [],
        borderColor: '#1f2739',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      {
        incidentId: 'chemical',
        label: 'Chemical',
        data: [],
        borderColor: '#1707bd',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      {
        incidentId: 'presence',
        label: 'Presence',
        data: [],
        borderColor: '#4cb59e',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      {
        incidentId: 'other',
        label: 'Other',
        data: [],
        borderColor: '#9d13ae',
        backgroundColor: 'rgba(0,0,0,0)',
      },
    ],
  };

  const incidentTypes = useSelector(state => state.filters.incidents);

  const [data, setData] = useState(initialData);

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
          stacked: false,
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
          stacked: false,
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

  return (
    <div
      style={{
        backgroundColor: '#191A1A',
        margin: '0 auto',
        maxWidth: '1550px',
      }}
    >
      <Popover
        placement="bottomRight"
        title="Filter this graph!"
        content={<FiltersForm />}
        trigger="click"
      >
        <Button type="primary">Filters</Button>
      </Popover>

      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
