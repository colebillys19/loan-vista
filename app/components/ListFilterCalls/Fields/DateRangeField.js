import React, { memo } from 'react';
import T from 'prop-types';

import DateRangeInput from '../Inputs/DateRangeInput';

import { FieldWrapper, StyledLabel } from './styledComponents';

const DateRangeField = ({ dateRange, disabled, onChange }) => { // eslint-disable-line
  // console.log('* * * app/components/ListFilterCalls/Fields/DateRangeField.js');

  return (
    <FieldWrapper disabled={disabled}>
      <StyledLabel htmlFor="">or</StyledLabel>
      <DateRangeInput onChange={onChange} value={dateRange} />
    </FieldWrapper>
  );
};

DateRangeField.propTypes = {
  dateRange: T.number.isRequired,
  disabled: T.bool.isRequired,
  onChange: T.func.isRequired,
};

export default memo(DateRangeField);
