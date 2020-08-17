/**
 * DateInput
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ForwardRefPicker from './ForwardRefPicker';
import Tooltip from './Tooltip';

const DateInput = ({
  errors: { emptyError, pickerError, setPickerError },
  onChange,
  value,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipMessage = emptyError
    ? 'please provide a date'
    : pickerError || '';

  useEffect(() => {
    if (emptyError || pickerError) {
      setTooltipOpen(true);
    } else {
      setTooltipOpen(false);
    }
  }, [emptyError, pickerError]);

  const onError = (err) => {
    if (err.length) {
      setPickerError(err);
    } else {
      setPickerError('');
    }
  };

  return (
    <Tooltip open={tooltipOpen} placement="top" title={tooltipMessage}>
      <ForwardRefPicker onChange={onChange} onError={onError} value={value} />
    </Tooltip>
  );
};

DateInput.propTypes = {
  errors: T.shape({
    emptyError: T.bool,
    pickerError: T.string,
    setPickerError: T.func,
  }).isRequired,
  onChange: T.func.isRequired,
  value: T.object,
};

export default DateInput;
