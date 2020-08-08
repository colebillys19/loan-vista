/**
 * ListFilter
 * @description ...
 */

import React, { useState } from 'react';
// import T from 'prop-types';

import DateInput from './DateInput';
import RefreshButton from './RefreshButton';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import { StyledButton, StyledForm, StyledLabel } from './styledComponents';

const ListFilter = () => {
  const [dateFromValue, setDateFromValue] = useState(null);
  const [dateToValue, setDateToValue] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [keywordValue, setKeywordValue] = useState('');

  return (
    <StyledForm>
      <StyledLabel htmlFor="">from</StyledLabel>
      <DateInput onChange={setDateFromValue} value={dateFromValue} />
      <StyledLabel htmlFor="">to</StyledLabel>
      <DateInput onChange={setDateToValue} value={dateToValue} />
      <StyledLabel htmlFor="">or</StyledLabel>
      <SelectInput onChange={setDateRangeValue} value={dateRangeValue} />
      <StyledLabel htmlFor="">and/or</StyledLabel>
      <TextInput onChange={setKeywordValue} value={keywordValue} />
      <RefreshButton onClick={() => null} />
      <StyledButton onClick={() => null} text="find" />
    </StyledForm>
  );
};

ListFilter.propTypes = {};

export default ListFilter;
