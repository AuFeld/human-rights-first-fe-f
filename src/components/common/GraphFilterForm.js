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
    <div
      className="filter-box"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '2em',
        width: '100%',
      }}
    >
      <div id="starting_month">
        Pick a starting month:
        <Select style={{ width: 100 }}>
          {months.map(month => {
            return <Option value={month}>{month}</Option>;
          })}
        </Select>
        <div id="ending_month">
          Pick an ending month:
          <Select style={{ width: 100 }}>
            {months.map(month2 => {
              return <Option value={month2}>{month2}</Option>;
            })}
          </Select>
        </div>
      </div>
    </div>
  );
}
