/**
 * DateInput
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import { usePrevious } from 'utils/customHooks';

import ForwardRefPicker from './ForwardRefPicker';
import Tooltip from './Tooltip';

const DateInput = ({ error, onChange, setError, value }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const prevError = usePrevious(error);

  useEffect(() => {
    if (error) {
      setTooltipOpen(true);
    } else {
      setTooltipOpen(false);
    }
  }, [error]);

  const onError = (err) => {
    if (err && err !== error) {
      setError(err);
    } else if (error && error !== prevError) {
      setError(error);
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
  error: T.string.isRequired,
  onChange: T.func.isRequired,
  setError: T.func.isRequired,
  value: T.object,
};

export default DateInput;
