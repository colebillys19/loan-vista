import { useState } from 'react';
import T from 'prop-types';

import { getDates, getError, getRangeValue } from './helpers';

const FilterState = ({ render }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [keywordValue, setKeywordValue] = useState('');

  // date input errors
  const [fromPickerError, setFromPickerError] = useState('');
  const [toPickerError, setToPickerError] = useState('');

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setFromPickerError(getError(date, dateTo));
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setToPickerError(getError(dateFrom, date));
  };

  const handleRangeChange = (value) => {
    setDateRangeValue(value);

    if (value === 0) {
      setDateFrom(null);
      setDateTo(null);
    } else {
      const { now, oneMo, oneWk, twoMo, twoWk } = getDates();

      setDateTo(now);

      if (value === 1) {
        setDateFrom(oneWk);
      } else if (value === 2) {
        setDateFrom(twoWk);
      } else if (value === 3) {
        setDateFrom(oneMo);
      } else {
        setDateFrom(twoMo);
      }
    }
  };

  const handleClearValues = () => {
    setDateFrom(null);
    setDateRangeValue(0);
    setDateTo(null);
    setKeywordValue('');
    setFromPickerError('');
    setToPickerError('');

    // dispatch fetch
  };

  const handleSubmitValues = () => {
    const fromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : null;
    const toStr = dateTo ? dateTo.format('YYYY-MM-DD') : null;

    // dispatch fetch
    console.log('handleSubmitValues');
    console.log({ dateFrom: fromStr, dateTo: toStr, keyword: keywordValue });
  };

  const datePickerFromError = {
    error: fromPickerError,
    setError: setFromPickerError,
  };

  const datePickerToError = {
    error: toPickerError,
    setError: setToPickerError,
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
