/**
 * DateInput
 * @description ...
 */

import React from 'react';
// import React, { useEffect, useState } from 'react';
import T from 'prop-types';

// import { usePrevious } from 'utils/customHooks';

import ForwardRefPicker from './ForwardRefPicker';
import Tooltip from './Tooltip';

const DateInput = ({ error, onChange, value }) => { // eslint-disable-line
  // const [tooltipOpen, setTooltipOpen] = useState(false);

  // const prevError = usePrevious(error);

  // useEffect(() => {
  //   if (error) {
  //     setTooltipOpen(true);
  //   } else {
  //     setTooltipOpen(false);
  //   }
  // }, [error]);

  // const onError = (err) => {
  //   if (err && !error) {
  //     setError(err);
  //   }
  // };

  return (
    <Tooltip
      open={false}
      placement="top"
      title={error || ''}
      TransitionProps={{ timeout: 0 }}
    >
      <ForwardRefPicker isError={!!error} onChange={onChange} value={value} />
    </Tooltip>
  );
};

DateInput.propTypes = {
  error: T.string.isRequired,
  onChange: T.func.isRequired,
  // setError: T.func.isRequired,
  value: T.object,
};

export default DateInput;
