/**
 * ListFilter
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DateInput from 'components/DateInput';
import ListFilterState from './ListFilterState';
import RefreshButton from './RefreshButton';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import { checkPickersStatus } from './helpers';
import {
  DisableWrapper,
  StyledButton,
  StyledForm,
  StyledLabel,
} from './styledComponents';

const ListFilter = ({ dispatchFetchData, fetchParams }) => (
  <ListFilterState
    dispatchFetchData={dispatchFetchData}
    fetchParams={fetchParams}
    render={({
      dateFrom,
      datePickerFromError,
      datePickerToError,
      dateRangeValue,
      dateTo,
      disableSubmit,
      handleClearValues,
      handleDateFromChange,
      handleDateToChange,
      handleKeywordChange,
      handleRangeChange,
      handleSubmitValues,
      keywordValue,
    }) => {
      const { error: fromError } = datePickerFromError;
      const { error: toError } = datePickerToError;
      const pickersStatus = checkPickersStatus(fromError, toError);

      return (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <DisableWrapper disabled={pickersStatus.from}>
            <StyledLabel htmlFor="">from</StyledLabel>
            <DateInput
              error={datePickerFromError}
              onChange={handleDateFromChange}
              value={dateFrom}
            />
          </DisableWrapper>
          <DisableWrapper disabled={pickersStatus.to}>
            <StyledLabel htmlFor="">to</StyledLabel>
            <DateInput
              error={datePickerToError}
              onChange={handleDateToChange}
              value={dateTo}
            />
          </DisableWrapper>
          <DisableWrapper disabled={fromError || toError}>
            <StyledLabel htmlFor="">or</StyledLabel>
            <SelectInput onChange={handleRangeChange} value={dateRangeValue} />
          </DisableWrapper>
          <DisableWrapper disabled={fromError || toError}>
            <StyledLabel htmlFor="">and/or</StyledLabel>
            <TextInput onChange={handleKeywordChange} value={keywordValue} />
          </DisableWrapper>
          <RefreshButton onClick={handleClearValues} />
          <DisableWrapper disabled={fromError || toError}>
            <StyledButton
              disabled={disableSubmit}
              onClick={handleSubmitValues}
              text="find"
              type="submit"
            />
          </DisableWrapper>
        </StyledForm>
      );
    }}
  />
);

ListFilter.propTypes = {
  dispatchFetchData: T.func.isRequired,
  fetchParams: T.object.isRequired,
};

export default ListFilter;
