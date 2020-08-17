import { useState } from 'react';
import T from 'prop-types';

import { getDates, getRangeValue } from './helpers';

const FilterState = ({ render }) => {
  const [dateFromValue, setDateFromValue] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [dateToValue, setDateToValue] = useState(null);
  const [keywordValue, setKeywordValue] = useState('');

  const [fromEmptyError, setFromEmptyError] = useState(false);
  const [fromPickerError, setFromPickerError] = useState('');
  const [toEmptyError, setToEmptyError] = useState(false);
  const [toPickerError, setToPickerError] = useState('');

  const handleDateFromChange = (date) => {
    setDateFromValue(date);
    setDateRangeValue(getRangeValue(dateFromValue, dateToValue));
    setFromPickerError('');
    setFromEmptyError(false);
  };

  const handleDateToChange = (date) => {
    setDateToValue(date);
    setDateRangeValue(getRangeValue(dateFromValue, dateToValue));
    setToPickerError('');
    setToEmptyError(false);
  };

  const handleRangeChange = (value) => {
    setDateRangeValue(value);

    if (value === 0) {
      setDateFromValue(null);
      setDateToValue(null);
    } else {
      const { now, oneMo, oneWk, twoMo, twoWk } = getDates();

      setDateToValue(now);

      if (value === 1) {
        setDateFromValue(oneWk);
      } else if (value === 2) {
        setDateFromValue(twoWk);
      } else if (value === 3) {
        setDateFromValue(oneMo);
      } else {
        setDateFromValue(twoMo);
      }
    }
  };

  // const handleClearValues = () => {};
  // const handleSubmitValues = () => {};

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
    dateFromValue,
    datePickerFromErrors,
    datePickerToErrors,
    dateRangeValue,
    dateToValue,
    handleDateFromChange,
    handleDateToChange,
    handleRangeChange,
    keywordValue,
    setKeywordValue,
  };

  return render(propsToPassDown);
};

FilterState.propTypes = { render: T.func.isRequired };

export default FilterState;
