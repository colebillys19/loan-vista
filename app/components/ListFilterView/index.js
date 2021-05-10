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
  keyword,
}) => (
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
      disabled={!!dateFromError || !!dateToError}
      onChange={handleDateRangeChange}
    />
    <KeywordField
      disabled={!!dateFromError || !!dateToError}
      keyword={keyword}
      onChange={handleKeywordChange}
    />
    <RefreshField
      disabled={!!dateFromError || !!dateToError}
      onClick={handleRefreshClick}
    />
    <SubmitField
      disabled={!!dateFromError || !!dateToError}
      onClick={handleSubmitClick}
    />
  </StyledForm>
);

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
  keyword: T.string.isRequired,
};

export default ListFilterView;
