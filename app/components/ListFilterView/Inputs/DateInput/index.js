/**
 * DateInput
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ForwardRefPicker from './ForwardRefPicker';
import Tooltip from './Tooltip';

const DateInput = ({ error, onChange, value }) => (
  <Tooltip
    open={!!error}
    placement="top"
    title={error || ''}
    TransitionProps={{ timeout: 0 }}
  >
    <ForwardRefPicker isError={!!error} onChange={onChange} value={value} />
  </Tooltip>
);

DateInput.propTypes = {
  error: T.string.isRequired,
  onChange: T.func.isRequired,
  value: T.object,
};

export default DateInput;
