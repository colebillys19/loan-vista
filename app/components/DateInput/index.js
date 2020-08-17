/**
 * DateInput
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ForwardRefPicker from './ForwardRefPicker';
import Tooltip from './Tooltip';

const DateInput = ({ error: { error, setError }, onChange, value }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setTooltipOpen(true);
    } else {
      setTooltipOpen(false);
    }
  }, [error]);

  const onError = (err) => {
    if (err.length) {
      setError(err);
    } else if (error) {
      setError(error);
    } else {
      setError('');
    }
  };

  return (
    <Tooltip
      open={tooltipOpen}
      placement="top"
      title={error || ''}
      TransitionProps={{ timeout: 0 }}
    >
      <ForwardRefPicker
        isError={!!error}
        onChange={onChange}
        onError={onError}
        value={value}
      />
    </Tooltip>
  );
};

DateInput.propTypes = {
  error: T.shape({
    error: T.string,
    setError: T.func,
  }).isRequired,
  onChange: T.func.isRequired,
  value: T.object,
};

export default DateInput;
