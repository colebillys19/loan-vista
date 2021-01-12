import React, { forwardRef } from 'react';
import T from 'prop-types';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import TextField from './TextField';
import { MAX_DATE, MIN_DATE } from './constants';
import {
  ErrorIndicator,
  DatePickerWrapper,
  StyledKeyboardDatePicker,
} from './styledComponents';

const ForwardRefPicker = forwardRef(({ isError, ...restProps }, ref) => (
  <DatePickerWrapper ref={ref}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledKeyboardDatePicker
        autoOk
        disableToolbar
        format="MM/DD/YYYY"
        invalidDateMessage="invalid date format"
        isError={isError}
        maxDate={MAX_DATE}
        maxDateMessage="future dates not permitted"
        minDate={MIN_DATE}
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
