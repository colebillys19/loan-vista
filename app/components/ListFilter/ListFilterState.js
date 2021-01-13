import { useState } from 'react';
import T from 'prop-types';

import {
  checkParamsNotEmpty,
  getDatesArr,
  getErrors,
  getRangeValue,
} from './helpers';

const ListFilterState = ({ dispatchFetchData, fetchParams, render }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateFromError, setDateFromError] = useState('');
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [dateToError, setDateToError] = useState('');
  const [keywordValue, setKeywordValue] = useState('');

  //
  const handleDateFromChange = (date) => {
    setDateFrom(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getErrors(date, dateTo, 'from')[0]);
    setDateToError(getErrors(date, dateTo, 'from')[1]);
  };

  //
  const handleDateToChange = (date) => {
    setDateTo(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getErrors(dateFrom, date, 'to')[0]);
    setDateToError(getErrors(dateFrom, date, 'to')[1]);
  };

  //
  const handleRangeChange = (value) => {
    setDateRangeValue(value);

    if (value === 0) {
      setDateFrom(null);
      setDateTo(null);
    } else {
      const dateObjArr = getDatesArr();
      setDateTo(dateObjArr[0]);
      setDateFrom(dateObjArr[value]);
    }
  };

  //
  const handleKeywordChange = (value) => {
    setKeywordValue(value);
  };

  //
  const handleClearValues = () => {
    setDateFrom(null);
    setDateRangeValue(0);
    setDateTo(null);
    setKeywordValue('');
    setDateFromError('');
    setDateToError('');

    const paramsNotEmpty = checkParamsNotEmpty(fetchParams);

    if (paramsNotEmpty) {
      dispatchFetchData({
        dateFrom: '',
        dateTo: '',
        keyword: '',
      });
    }
  };

  //
  const handleSubmitValues = () => {
    if (!dateFromError && !dateToError) {
      const fromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : '';
      const toStr = dateTo ? dateTo.format('YYYY-MM-DD') : '';

      dispatchFetchData({
        dateFrom: fromStr,
        dateTo: toStr,
        keyword: keywordValue,
      });
    }
  };

  const datePickerFromError = {
    error: dateFromError,
    setError: setDateFromError,
  };

  const datePickerToError = {
    error: dateToError,
    setError: setDateToError,
  };

  const propsToPassDown = {
    dateFrom,
    datePickerFromError,
    datePickerToError,
    dateRangeValue,
    dateTo,
    handleClearValues,
    handleDateFromChange,
    handleDateToChange,
    handleKeywordChange,
    handleRangeChange,
    handleSubmitValues,
    keywordValue,
  };

  return render(propsToPassDown);
};

ListFilterState.propTypes = {
  dispatchFetchData: T.func.isRequired,
  fetchParams: T.object.isRequired,
  render: T.func.isRequired,
};

export default ListFilterState;
