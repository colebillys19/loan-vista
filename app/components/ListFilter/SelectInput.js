import React from 'react';
import T from 'prop-types';

import { StyledMenuItem, StyledSelect } from './styledComponents';

const SelectInput = ({ onChange, value }) => (
  <StyledSelect
    displayEmpty
    inputProps={{ 'aria-label': 'date range select' }}
    MenuProps={{ classes: { list: 'date-range-list' } }}
    onChange={(e) => onChange(e.target.value)}
    value={value}
  >
    <StyledMenuItem value={0} disabled>
      date range
    </StyledMenuItem>
    <StyledMenuItem value={1}>last week</StyledMenuItem>
    <StyledMenuItem value={2}>last 2 weeks</StyledMenuItem>
    <StyledMenuItem value={3}>last month</StyledMenuItem>
    <StyledMenuItem value={4}>last 2 months</StyledMenuItem>
  </StyledSelect>
);

SelectInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.number.isRequired,
};

export default SelectInput;
