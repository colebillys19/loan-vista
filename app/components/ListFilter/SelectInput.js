import React from 'react';
import { MenuItem, Select } from '@material-ui/core';
import T from 'prop-types';

const RangeSelect = ({ onChange, value }) => (
  <Select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    displayEmpty
    inputProps={{ 'aria-label': 'date range select' }}
  >
    <MenuItem value={0} disabled>
      select a date range
    </MenuItem>
    <MenuItem value={1}>last week</MenuItem>
    <MenuItem value={2}>last 2 weeks</MenuItem>
    <MenuItem value={3}>last month</MenuItem>
    <MenuItem value={4}>last 2 months</MenuItem>
  </Select>
);

RangeSelect.propTypes = {
  onChange: T.func.isRequired,
  value: T.number.isRequired,
};

export default RangeSelect;
