import React from 'react';
import T from 'prop-types';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { StyledKeyboardDatePicker } from './styledComponents';

const DateInput = ({ onChange, value }) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <StyledKeyboardDatePicker
      autoOk
      disableFuture
      disableToolbar
      emptyLabel="date"
      format="M/D/YYYY"
      onChange={onChange}
      value={value}
      variant="inline"
    />
  </MuiPickersUtilsProvider>
);

DateInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.object,
};

export default DateInput;
