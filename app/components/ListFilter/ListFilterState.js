import { useEffect, useState } from 'react';
import T from 'prop-types';

import { getDates, getError, getRangeValue } from './helpers';

const FilterState = ({ render }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateFromError, setDateFromError] = useState('');
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [dateToError, setDateToError] = useState('');
  const [keywordValue, setKeywordValue] = useState('');
  const [dateErrorIndex, setDateErrorIndex] = useState(-1);

  useEffect(() => {
    if (dateFromError) {
      setDateErrorIndex(0);
    } else if (dateToError) {
      setDateErrorIndex(1);
    } else {
      setDateErrorIndex(-1);
    }
  }, [dateFromError, dateToError]);

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateFromError(getError(date, dateTo));
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setDateToError(getError(dateFrom, date));
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
    dateErrorIndex,
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
