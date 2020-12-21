import { useEffect, useState } from 'react';
import T from 'prop-types';

import { getDatesArr, getErrors, getRangeValue, isSameParams } from './helpers';

const ListFilterState = ({ dispatchFetchData, fetchParams, render }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateFromError, setDateFromError] = useState('');
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [dateToError, setDateToError] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [keywordValue, setKeywordValue] = useState('');

  useEffect(() => {
    if (
      !disableSubmit &&
      isSameParams({ fetchParams, dateFrom, dateTo, keywordValue })
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, []);

  const handleDateFromChange = (date) => {
    if (
      !disableSubmit &&
      isSameParams({ fetchParams, dateFrom: date, dateTo, keywordValue })
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }

    setDateFrom(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getErrors(date, dateTo, 'from')[0]);
    setDateToError(getErrors(date, dateTo, 'from')[1]);
  };

  const handleDateToChange = (date) => {
    if (
      !disableSubmit &&
      isSameParams({ fetchParams, dateFrom, dateTo: date, keywordValue })
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }

    setDateTo(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getErrors(dateFrom, date, 'to')[0]);
    setDateToError(getErrors(dateFrom, date, 'to')[1]);
  };

  const handleRangeChange = (value) => {
    setDateRangeValue(value);

    if (value === 0) {
      if (
        !disableSubmit &&
        isSameParams({
          fetchParams,
          dateFrom: null,
          dateTo: null,
          keywordValue,
        })
      ) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }

      setDateFrom(null);
      setDateTo(null);
    } else {
      const dateObjArr = getDatesArr();

      if (
        !disableSubmit &&
        isSameParams({
          fetchParams,
          dateFrom: dateObjArr[value],
          dateTo: dateObjArr[0],
          keywordValue,
        })
      ) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }

      setDateTo(dateObjArr[0]);
      setDateFrom(dateObjArr[value]);
    }
  };

  const handleKeywordChange = (value) => {
    if (
      !disableSubmit &&
      isSameParams({ fetchParams, dateFrom, dateTo, keywordValue: value })
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }

    setKeywordValue(value);
  };

  const handleClearValues = () => {
    setDateFrom(null);
    setDateRangeValue(0);
    setDateTo(null);
    setKeywordValue('');
    setDateFromError('');
    setDateToError('');

    const {
      dateFrom: reduxDateFrom,
      dateTo: reduxDateTo,
      keyword: reduxKeyword,
    } = fetchParams;

    if (reduxDateFrom !== '' || reduxDateTo !== '' || reduxKeyword !== '') {
      dispatchFetchData({
        currentTotal: 80,
        dateFrom: '',
        dateTo: '',
        keyword: '',
      });
    }
  };

  const handleSubmitValues = () => {
    if (!dateFromError && !dateToError) {
      const fromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : null;
      const toStr = dateTo ? dateTo.format('YYYY-MM-DD') : null;

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
    disableSubmit,
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
