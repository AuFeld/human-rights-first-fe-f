import React from 'react';
import { Checkbox } from 'antd';

export default function GraphFilterForm() {
  const incidents = ['test', 'test2', 'test3'];

  return (
    <div className="filter-box">
      <div className="filter-types">
        <div className="checkboxes">
          <Checkbox.Group style={{ width: '100%' }} options={incidents} />
        </div>
      </div>
    </div>
  );
}
