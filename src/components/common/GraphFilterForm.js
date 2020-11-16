import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { useSelector, useDispatch, connect } from 'react-redux';
import { updateGraphFilters } from '../../state/actions/index.js';
import { v4 as uuid} from 'uuid';

//getting the range picker element from date
const { Option } = Select;

const GraphFilterForm = (props) => {
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

  const [filteredMonths, setFilteredMonths] = useState({
    startMonth: 0,
    endMonth: 0,
    filteredRange: []
  })

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
          onChange={(event) => {
            // let v = months.indexOf(event)
            // console.log(v)
            setFilteredMonths({
              ...filteredMonths,
              startMonth: months.indexOf(event)
            })
            console.log(event)
            console.log(months.indexOf(event))
          }}
        >
          {months.map(month => {
            return <Option 
            value={month}
            key={uuid()}
            >{month}</Option>;
          })}
        </Select>
        <div id="ending_month">
          Pick an ending month:
          <Select
            style={{
              width: 100,
              margin: '2%',
            }}
            //end month needs to have requirement that it takes place
            //after start month
            onChange={(event) => {
              setFilteredMonths({
                ...filteredMonths,
                endMonth: months.indexOf(event)
              })
              console.log(filteredMonths.endMonth)
            }}
          >
            {months.map(month2 => {
              return <Option 
              value={month2}
              key={uuid()}
              >{month2}</Option>;
            })}
          </Select>
        </div>
        <Button type="submit" onClick={(event) => {
          setFilteredMonths({
            ...filteredMonths,
            filteredRange: months.slice(filteredMonths.startMonth, filteredMonths.endMonth)
          })
          console.log(filteredMonths)
          props.updateGraphFilters(filteredMonths.filteredRange)
        }}>Submit</Button>
      </div>
    </div>
  );
}


export default connect(null, {updateGraphFilters})(GraphFilterForm);