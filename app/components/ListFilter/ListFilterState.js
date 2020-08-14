import { useState } from 'react';
import T from 'prop-types';

const FilterState = ({ render }) => {
  const [dateFromValue, setDateFromValue] = useState(null);
  const [dateToValue, setDateToValue] = useState(null);
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [keywordValue, setKeywordValue] = useState('');

  // date inputs error state
  const [fromEmptyError, setFromEmptyError] = useState(false);
  const [fromPickerError, setFromPickerError] = useState('');
  const [toEmptyError, setToEmptyError] = useState(false);
  const [toPickerError, setToPickerError] = useState('');

  // const handleSearchChange = () => {};
  // const handleSelectChange = () => {};
  // const handleClearValues = () => {};
  // const handleSubmitValues = () => {};

  const handleDateFromChange = (date) => {
    setDateRangeValue(0);
    setDateFromValue(date);
    setFromPickerError('');
    setFromEmptyError(false);
  };

  const handleDateToChange = (date) => {
    setDateRangeValue(0);
    setDateToValue(date);
    setToPickerError('');
    setToEmptyError(false);
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
    dateFromValue,
    datePickerFromErrors,
    datePickerToErrors,
    dateRangeValue,
    dateToValue,
    handleDateFromChange,
    handleDateToChange,
    keywordValue,
    setDateRangeValue,
    setKeywordValue,
  };

  return render(propsToPassDown);
};

FilterState.propTypes = { render: T.func.isRequired };

export default FilterState;
