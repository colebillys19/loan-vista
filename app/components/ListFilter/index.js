/**
 * ListFilter
 * @description ...
 */

import React, { useState } from 'react';
// import T from 'prop-types';
import moment from 'moment';

import DateInput from './DateInput';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { StyledForm, StyledLabel } from './styledComponents';

const ListFilter = () => {
  const [dateFromValue, setDateFromValue] = useState(moment());
  const [dateToValue, setDateToValue] = useState(moment());
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [keywordValue, setKeywordValue] = useState('');

  return (
    <StyledForm>
      <StyledLabel for="">from</StyledLabel>
      <DateInput onChange={setDateFromValue} value={dateFromValue} />
      <StyledLabel for="">to</StyledLabel>
      <DateInput onChange={setDateToValue} value={dateToValue} />
      <StyledLabel for="">or</StyledLabel>
      <SelectInput onChange={setDateRangeValue} value={dateRangeValue} />
      <StyledLabel for="">and/or</StyledLabel>
      <TextInput onChange={setKeywordValue} value={keywordValue} />
    </StyledForm>
  );
};

ListFilter.propTypes = {};

export default ListFilter;
