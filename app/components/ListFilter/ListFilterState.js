import { useState } from 'react';
import T from 'prop-types';

import { getDatesArr, getErrors, getRangeValue } from './helpers';

const FilterState = ({ render }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateFromError, setDateFromError] = useState('');
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [dateToError, setDateToError] = useState('');
  const [keywordValue, setKeywordValue] = useState('');

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getErrors(date, dateTo, 'from')[0]);
    setDateToError(getErrors(date, dateTo, 'from')[1]);
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getErrors(dateFrom, date, 'to')[0]);
    setDateToError(getErrors(dateFrom, date, 'to')[1]);
  };

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

  const handleClearValues = () => {
    setDateFrom(null);
    setDateRangeValue(0);
    setDateTo(null);
    setKeywordValue('');
    setDateFromError('');
    setDateToError('');

    // dispatch fetch
  };

  const handleSubmitValues = () => {
    if (!dateFromError && !dateToError) {
      const fromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : null;
      const toStr = dateTo ? dateTo.format('YYYY-MM-DD') : null;

      // dispatch fetch
      console.log('handleSubmitValues');
      console.log({ dateFrom: fromStr, dateTo: toStr, keyword: keywordValue });
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
    handleRangeChange,
    handleSubmitValues,
    keywordValue,
    setKeywordValue,
  };

  return render(propsToPassDown);
};

FilterState.propTypes = { render: T.func.isRequired };

export default FilterState;
