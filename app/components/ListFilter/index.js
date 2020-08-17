/**
 * ListFilter
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import DateInput from 'components/DateInput';
import ListFilterState from './ListFilterState';
import RefreshButton from './RefreshButton';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import { StyledButton, StyledForm, StyledLabel } from './styledComponents';

const ListFilter = () => (
  <ListFilterState
    render={({
      dateFromValue,
      datePickerFromErrors,
      datePickerToErrors,
      dateRangeValue,
      dateToValue,
      handleDateFromChange,
      handleDateToChange,
      handleRangeChange,
      keywordValue,
      setKeywordValue,
    }) => (
      <StyledForm>
        <StyledLabel htmlFor="">from</StyledLabel>
        <DateInput
          errors={datePickerFromErrors}
          onChange={handleDateFromChange}
          value={dateFromValue}
        />
        <StyledLabel htmlFor="">to</StyledLabel>
        <DateInput
          errors={datePickerToErrors}
          onChange={handleDateToChange}
          value={dateToValue}
        />
        <StyledLabel htmlFor="">or</StyledLabel>
        <SelectInput onChange={handleRangeChange} value={dateRangeValue} />
        <StyledLabel htmlFor="">and/or</StyledLabel>
        <TextInput onChange={setKeywordValue} value={keywordValue} />
        <RefreshButton onClick={() => null} />
        <StyledButton onClick={() => null} text="find" />
      </StyledForm>
    )}
  />
);

ListFilter.propTypes = {};

export default ListFilter;
