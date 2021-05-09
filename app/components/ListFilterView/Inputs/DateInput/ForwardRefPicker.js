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

const ForwardRefPicker = forwardRef(
  ({ disabled, isError, ...restProps }, ref) => (
    <DatePickerWrapper ref={ref}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <StyledKeyboardDatePicker
          autoOk
          disabled={disabled}
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
  ),
);

ForwardRefPicker.propTypes = {
  disabled: T.bool.isRequired,
  isError: T.bool.isRequired,
};

export default ForwardRefPicker;
