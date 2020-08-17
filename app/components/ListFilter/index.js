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
      dateFrom,
      datePickerFromError,
      datePickerToError,
      dateRangeValue,
      dateTo,
      handleClearValues,
      handleDateFromChange,
      handleDateToChange,
      handleRangeChange,
      handleSubmitValues,
      keywordValue,
      setKeywordValue,
    }) => (
      <StyledForm>
        <StyledLabel htmlFor="">from</StyledLabel>
        <DateInput
          error={datePickerFromError}
          onChange={handleDateFromChange}
          value={dateFrom}
        />
        <StyledLabel htmlFor="">to</StyledLabel>
        <DateInput
          error={datePickerToError}
          onChange={handleDateToChange}
          value={dateTo}
        />
        <StyledLabel htmlFor="">or</StyledLabel>
        <SelectInput onChange={handleRangeChange} value={dateRangeValue} />
        <StyledLabel htmlFor="">and/or</StyledLabel>
        <TextInput onChange={setKeywordValue} value={keywordValue} />
        <RefreshButton onClick={handleClearValues} />
        <StyledButton onClick={handleSubmitValues} text="find" />
      </StyledForm>
    )}
  />
);

ListFilter.propTypes = {};

export default ListFilter;
