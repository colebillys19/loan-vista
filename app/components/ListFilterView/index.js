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
  setDateFromError,
  setDateToError,
}) => (
  <StyledForm onSubmit={(e) => e.preventDefault()}>
    <DateField
      disabled={false}
      error={dateFromError}
      label="from"
      onChange={handleDateFromChange}
      setError={setDateFromError}
      value={dateFrom}
    />
    <DateField
      disabled={false}
      error={dateToError}
      label="to"
      onChange={handleDateToChange}
      setError={setDateToError}
      value={dateTo}
    />
    <DateRangeField
      dateRange={dateRange}
      disabled={false}
      onChange={handleDateRangeChange}
    />
    <KeywordField
      disabled={false}
      keyword={keyword}
      onChange={handleKeywordChange}
    />
    <RefreshField disabled={false} onClick={handleRefreshClick} />
    <SubmitField disabled={false} onClick={handleSubmitClick} />
  </StyledForm>
);

ListFilterView.propTypes = {
  dateFrom: T.object.isRequired,
  dateFromError: T.string.isRequired,
  dateRange: T.number.isRequired,
  dateTo: T.object.isRequired,
  dateToError: T.string.isRequired,
  handleDateFromChange: T.func.isRequired,
  handleDateRangeChange: T.func.isRequired,
  handleDateToChange: T.func.isRequired,
  handleKeywordChange: T.func.isRequired,
  handleRefreshClick: T.func.isRequired,
  handleSubmitClick: T.func.isRequired,
  keyword: T.string.isRequired,
  setDateFromError: T.func.isRequired,
  setDateToError: T.func.isRequired,
};

export default ListFilterView;
