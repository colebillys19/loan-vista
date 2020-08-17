import { useState } from 'react';
import T from 'prop-types';

import { getDates, getError, getRangeValue } from './helpers';

const FilterState = ({ render }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateTo, setDateTo] = useState(null);
  const [keywordValue, setKeywordValue] = useState('');

  // date input errors
  const [fromEmptyError, setFromEmptyError] = useState(false);
  const [fromPickerError, setFromPickerError] = useState('');
  const [toEmptyError, setToEmptyError] = useState(false);
  const [toPickerError, setToPickerError] = useState('');

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setFromPickerError(getError(dateFrom, dateTo));
    setFromEmptyError(false);
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
    setDateRangeValue(getRangeValue(dateFrom, dateTo));
    setFromPickerError(getError(dateFrom, dateTo));
    setToEmptyError(false);
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

    // dispatch fetch
  };

  const handleSubmitValues = () => {
    const fromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : null;
    const toStr = dateTo ? dateTo.format('YYYY-MM-DD') : null;

    // dispatch fetch
    console.log('handleSubmitValues');
    console.log({ dateFrom: fromStr, dateTo: toStr, keyword: keywordValue });
  };

  const datePickerFromErrors = {
    emptyError: fromEmptyError,
    pickerError: fromPickerError,
    setPickerError: setFromPickerError,
  };

  const datePickerToErrors = {
    emptyError: toEmptyError,
    pickerError: toPickerError,
    setPickerError: setToPickerError,
  };

  const propsToPassDown = {
    dateFrom,
    datePickerFromErrors,
    datePickerToErrors,
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
