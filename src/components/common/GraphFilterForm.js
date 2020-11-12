import React from 'react';
import { Select, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

//getting the range picker element from date
const { Option } = Select;

export default function GraphFilterForm() {
  // const [months] = useSelector(state => [state.filterGraphReducer.userRange]);
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
        justifyContent: 'center',
      }}
    >
      <div id="starting_month">
        Pick a starting month:
        <Select
          style={{
            width: 100,
            margin: '2%',
          }}
        >
          {months.map(month => {
            return <Option value={month}>{month}</Option>;
          })}
        </Select>
        <div id="ending_month">
          Pick an ending month:
          <Select
            style={{
              width: 100,
              margin: '2%',
            }}
          >
            {months.map(month2 => {
              return <Option value={month2}>{month2}</Option>;
            })}
          </Select>
        </div>
        <Button type="primary">Submit</Button>
      </div>
    </div>
  );
}
