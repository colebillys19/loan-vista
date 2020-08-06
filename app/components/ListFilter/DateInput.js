import React, { useState } from 'react';
import T from 'prop-types';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

import { StyledKeyboardDatePicker } from './styledComponents';

const DateInput = ({ onChange, value }) => {
  const [inputValue, setInputValue] = useState(moment().format('M/D/YYYY'));

  const handleChange = (date, dateInputValue) => {
    onChange(date);
    setInputValue(dateInputValue);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StyledKeyboardDatePicker
        autoOk
        disableFuture
        disableToolbar
        format="M/D/YYYY"
        inputValue={inputValue}
        onChange={handleChange}
        value={value}
        variant="inline"
      />
    </MuiPickersUtilsProvider>
  );
};

DateInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.object.isRequired,
};

export default DateInput;
