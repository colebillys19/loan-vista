/**
 * ListFilter
 * @description ...
 */

import React, { memo } from 'react';
import T from 'prop-types';

import DateField from './Fields/DateField';
import DateRangeField from './Fields/DateRangeField';
import KeywordField from './Fields/KeywordField';
import RefreshField from './Fields/RefreshField';
import SubmitField from './Fields/SubmitField';

import {
  // checkDatesOrder,
  checkParamsNotEmpty,
  getDatesArr,
  // getRangeValue,
} from './helpers';
import { StyledForm } from './styledComponents';

const mockSetErr = () => '';
const mockOnChange = () => null;

const ListFilter = (props) => {
  // console.log('* * * components/ListFilterCalls');
  // console.log(props);

  const {
    dispatchFetchData,
    dispatchUpdateFilterState,
    filterState,
    lastFetchParams,
  } = props;

  const {
    dateFrom,
    dateFromError,
    dateRange,
    dateTo,
    dateToError,
    keyword,
  } = filterState;

  //
  //
  //
  // const handleDateFromChange = (date) => {
  //   const [fromError, toError] = checkDatesOrder(date, dateTo, 'from');

  //   const payload = {
  //     ...filterState,
  //     dateFrom: date,
  //     dateRange: getRangeValue(date, dateTo),
  //   };

  //   if (fromError || toError) {
  //     payload.dateFromError = fromError;
  //     payload.dateToError = toError;
  //   }

  //   dispatchUpdateFilterState(payload);
  // };

  //
  //
  //
  // const handleDateToChange = (date) => {
  //   const [fromError, toError] = checkDatesOrder(dateFrom, date, 'to');

  //   const payload = {
  //     ...filterState,
  //     dateRange: getRangeValue(dateFrom, date),
  //     dateTo: date,
  //   };

  //   if (fromError || toError) {
  //     payload.dateFromError = fromError;
  //     payload.dateToError = toError;
  //   }

  //   dispatchUpdateFilterState(payload);
  // };z

  //
  //
  //
  const handleDateRangeChange = (value) => {
    const payload = { ...filterState, dateRange: value };

    if (value === 0) {
      payload.dateFrom = null;
      payload.dateTo = null;
    } else {
      const datesArr = getDatesArr();

      payload.dateFrom = datesArr[value];
      payload.dateTo = datesArr[0]; // eslint-disable-line
    }

    dispatchUpdateFilterState(payload);
  };

  //
  //
  //
  const handleKeywordChange = (value) => {
    dispatchUpdateFilterState({ ...filterState, keyword: value });
  };

  //
  //
  //
  const handleRefreshClick = () => {
    dispatchUpdateFilterState({
      dateFrom: null,
      dateFromError: '',
      dateRange: 0,
      dateTo: null,
      dateToError: '',
      keyword: '',
    });

    if (checkParamsNotEmpty(lastFetchParams)) {
      dispatchFetchData();
    }
  };

  //
  //
  //
  const handleSubmitClick = () => {
    if (!dateFromError && !dateToError) {
      dispatchFetchData();
    }
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <DateField
        disabled={false}
        error={dateFromError}
        label="from"
        // onChange={handleDateFromChange}
        onChange={mockOnChange}
        // setError={(err) =>
        //   dispatchUpdateFilterState({ ...filterState, dateFromError: err })
        // }
        setError={mockSetErr}
        value={dateFrom}
      />
      <DateField
        disabled={false}
        error={dateToError}
        label="to"
        // onChange={handleDateToChange}
        onChange={mockOnChange}
        // setError={(err) =>
        //   dispatchUpdateFilterState({ ...filterState, dateToError: err })
        // }
        setError={mockSetErr}
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

export default memo(ListFilter);
