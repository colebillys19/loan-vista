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
import {
  DisableWrapper,
  StyledButton,
  StyledForm,
  StyledLabel,
} from './styledComponents';

const ListFilter = () => (
  <ListFilterState
    render={({
      dateErrorIndex,
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
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <DisableWrapper disabled={dateErrorIndex === 1}>
          <StyledLabel htmlFor="">from</StyledLabel>
          <DateInput
            error={datePickerFromError}
            onChange={handleDateFromChange}
            value={dateFrom}
          />
        </DisableWrapper>
        <DisableWrapper disabled={dateErrorIndex === 0}>
          <StyledLabel htmlFor="">to</StyledLabel>
          <DateInput
            error={datePickerToError}
            onChange={handleDateToChange}
            value={dateTo}
          />
        </DisableWrapper>
        <DisableWrapper disabled={dateErrorIndex !== -1}>
          <StyledLabel htmlFor="">or</StyledLabel>
          <SelectInput onChange={handleRangeChange} value={dateRangeValue} />
        </DisableWrapper>
        <DisableWrapper disabled={dateErrorIndex !== -1}>
          <StyledLabel htmlFor="">and/or</StyledLabel>
          <TextInput onChange={setKeywordValue} value={keywordValue} />
        </DisableWrapper>
        <RefreshButton onClick={handleClearValues} />
        <DisableWrapper disabled={dateErrorIndex !== -1}>
          <StyledButton
            onClick={handleSubmitValues}
            text="find"
            type="submit"
          />
        </DisableWrapper>
      </StyledForm>
    )}
  />
);

ListFilter.propTypes = {};

export default ListFilter;
