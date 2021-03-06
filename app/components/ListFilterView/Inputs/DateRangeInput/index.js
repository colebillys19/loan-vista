import React from 'react';
import T from 'prop-types';

import { StyledMenuItem, StyledSelect } from './styledComponents';

const DateRangeInput = ({ disabled, onChange, value }) => {
  const getRenderValue = (val) => {
    switch (val) {
      case 1:
        return 'last week';
      case 2:
        return 'last 2 weeks';
      case 3:
        return 'last month';
      case 4:
        return 'last 2 months';
      default:
        return 'date range';
    }
  };

  return (
    <StyledSelect
      disabled={disabled}
      displayEmpty
      onChange={(e) => onChange(e.target.value)}
      renderValue={getRenderValue}
      value={value}
    >
      <StyledMenuItem isClear value={0}>
        {value === 0 ? 'date range' : 'clear'}
      </StyledMenuItem>
      <StyledMenuItem value={1}>last week</StyledMenuItem>
      <StyledMenuItem value={2}>last 2 weeks</StyledMenuItem>
      <StyledMenuItem value={3}>last month</StyledMenuItem>
      <StyledMenuItem value={4}>last 2 months</StyledMenuItem>
    </StyledSelect>
  );
};

DateRangeInput.propTypes = {
  disabled: T.bool.isRequired,
  onChange: T.func.isRequired,
  value: T.number.isRequired,
};

export default DateRangeInput;
