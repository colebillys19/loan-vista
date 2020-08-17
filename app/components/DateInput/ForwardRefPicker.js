import React, { forwardRef } from 'react';
import T from 'prop-types';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import TextField from './TextField';
import {
  ErrorIndicator,
  DatePickerWrapper,
  StyledKeyboardDatePicker,
} from './styledComponents';

// eslint-disable-next-line
const ForwardRefPicker = forwardRef(({ isError, ...restProps }, ref) => (
  <DatePickerWrapper ref={ref}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledKeyboardDatePicker
        autoOk
        disableFuture
        disableToolbar
        format="MM/DD/YYYY"
        invalidDateMessage="invalid date format"
        isError={isError}
        maxDateMessage="future dates not permitted"
        minDate={new Date('1970-01-01')}
        minDateMessage="pick a more recent date"
        TextFieldComponent={TextField}
        variant="inline"
        {...restProps}
      />
    </MuiPickersUtilsProvider>
    <ErrorIndicator isError={isError} />
  </DatePickerWrapper>
));

ForwardRefPicker.propTypes = {
  isError: T.bool.isRequired,
  onChange: T.func.isRequired,
  value: T.object,
};

export default ForwardRefPicker;
