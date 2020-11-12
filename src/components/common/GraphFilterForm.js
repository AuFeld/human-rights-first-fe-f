import React from 'react';
import { Select } from 'antd';

//getting the range picker element from date
const { Option } = Select;

export default function GraphFilterForm() {
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

  return (
    <div className="filter-box">
      <div id="starting_month">
        <Select style={{ width: 100 }}>
          {months.map(month => {
            return <Option value={month}>{month}</Option>;
          })}
        </Select>
      </div>
    </div>
  );
}
