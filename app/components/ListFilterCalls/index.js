/**
 * ListFilter
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DateField from './Fields/DateField';
import DateRangeField from './Fields/DateRangeField';
import KeywordField from './Fields/KeywordField';
import RefreshField from './Fields/RefreshField';
import SubmitField from './Fields/SubmitField';

import HandlerLogic from './HandlerLogic';
import { StyledForm } from './styledComponents';

const ListFilter = ({
  dispatchFetchData,
  dispatchUpdateFilterState,
  filterState,
  lastFetchParams,
}) => {
  const {
    dateFrom,
    dateFromError,
    dateRange,
    dateTo,
    dateToError,
    keyword,
  } = filterState;

  return (
    <HandlerLogic
      dispatchFetchData={dispatchFetchData}
      dispatchUpdateFilterState={dispatchUpdateFilterState}
      filterState={filterState}
      lastFetchParams={lastFetchParams}
      render={({
        handleDateFromChange,
        handleDateRangeChange,
        handleDateToChange,
        handleKeywordChange,
        handleRefreshClick,
        handleSubmitClick,
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
      )}
    />
  );
};

ListFilter.propTypes = {
  dispatchFetchData: T.func.isRequired,
  dispatchUpdateFilterState: T.func.isRequired,
  filterState: T.shape({
    dateFrom: T.object,
    dateFromError: T.string,
    dateRange: T.number,
    dateTo: T.object,
    dateToError: T.string,
    keyword: T.string,
  }).isRequired,
  lastFetchParams: T.object.isRequired,
};

export default ListFilter;
