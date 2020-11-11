import React from 'react';
import { Checkbox, DatePicker } from 'antd';
//getting the range picker element from date
const { RangePicker } = DatePicker;

export default function GraphFilterForm() {
  const incidents = ['test', 'test2', 'test3'];

  return (
    <div className="filter-box">
      <div className="date-range">
        <RangePicker picker="month" renderExtraFooter={() => 'extra footer'} />
      </div>
      <div className="filter-types">
        <div className="checkboxes">
          <Checkbox.Group
            style={{ width: '100%' }}
            options={incidents}
            defaultValue={incidents}
          />
        </div>
      </div>
    </div>
  );
}
