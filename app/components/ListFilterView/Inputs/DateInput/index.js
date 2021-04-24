/**
 * DateInput
 * @description ...
 */

import React, { useLayoutEffect, useState } from 'react';
import T from 'prop-types';

import { usePrevious } from 'utils/customHooks';

import ForwardRefPicker from './ForwardRefPicker';
import Tooltip from './Tooltip';

const DateInput = ({ error, ...restProps }) => {
  const [open, setOpen] = useState(false);

  const prevError = usePrevious(error);

  useLayoutEffect(() => {
    if (prevError !== '' && error !== prevError) {
      setOpen(false);
      setOpen(true);
    } else {
      setOpen(!!error);
    }
  }, [error, prevError]);

  return (
    <Tooltip
      open={open}
      placement="top"
      title={error}
      TransitionProps={{ timeout: 0 }}
    >
      <ForwardRefPicker isError={!!error} {...restProps} />
    </Tooltip>
  );
};

DateInput.propTypes = { error: T.string.isRequired };

export default DateInput;
