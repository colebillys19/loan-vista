/**
 * ListFilterView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DateField from './Fields/DateField';
import DateRangeField from './Fields/DateRangeField';
import KeywordField from './Fields/KeywordField';
import RefreshField from './Fields/RefreshField';
import SubmitField from './Fields/SubmitField';

import { StyledForm } from './styledComponents';

const ListFilterView = ({
  dateFrom,
  dateFromError,
  dateRange,
  dateTo,
  dateToError,
  handleDateFromChange,
  handleDateRangeChange,
  handleDateToChange,
  handleKeywordChange,
  handleRefreshClick,
  handleSubmitClick,
  isFilteredData,
  keyword,
}) => {
  const isDateError = !!dateFromError || !!dateToError;
  const noInput = !dateFrom && !dateTo && !keyword;

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <DateField
        disabled={!!dateToError}
        error={dateFromError}
        label="from"
        onChange={handleDateFromChange}
        value={dateFrom}
      />
      <DateField
        disabled={!!dateFromError}
        error={dateToError}
        label="to"
        onChange={handleDateToChange}
        value={dateTo}
      />
      <DateRangeField
        dateRange={dateRange}
        disabled={isDateError}
        onChange={handleDateRangeChange}
      />
      <KeywordField
        disabled={isDateError}
        keyword={keyword}
        onChange={handleKeywordChange}
      />
      <RefreshField
        disabled={!isFilteredData && noInput}
        onClick={handleRefreshClick}
      />
      <SubmitField
        disabled={isDateError || noInput}
        onClick={handleSubmitClick}
      />
    </StyledForm>
  );
};

ListFilterView.propTypes = {
  dateFrom: T.object,
  dateFromError: T.string.isRequired,
  dateRange: T.number.isRequired,
  dateTo: T.object,
  dateToError: T.string.isRequired,
  handleDateFromChange: T.func.isRequired,
  handleDateRangeChange: T.func.isRequired,
  handleDateToChange: T.func.isRequired,
  handleKeywordChange: T.func.isRequired,
  handleRefreshClick: T.func.isRequired,
  handleSubmitClick: T.func.isRequired,
  isFilteredData: T.bool.isRequired,
  keyword: T.string.isRequired,
};

export default ListFilterView;
