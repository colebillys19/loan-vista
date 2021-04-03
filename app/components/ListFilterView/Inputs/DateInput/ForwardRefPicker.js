import React, { forwardRef } from 'react';
import T from 'prop-types';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import { EPOCH_MOMENT } from 'utils/globalConstants';

import TextField from './TextField';
import {
  DatePickerWrapper,
  ErrorIndicator,
  StyledKeyboardDatePicker,
} from './styledComponents';

const ForwardRefPicker = forwardRef(({ isError, ...restProps }, ref) => (
  <DatePickerWrapper ref={ref}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledKeyboardDatePicker
        autoOk
        disableToolbar
        format="MM/DD/YYYY"
        maxDate={moment()}
        minDate={EPOCH_MOMENT}
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
