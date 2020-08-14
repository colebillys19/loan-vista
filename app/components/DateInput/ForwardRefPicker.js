import React, { forwardRef } from 'react';
import T from 'prop-types';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { StyledKeyboardDatePicker } from './styledComponents';

// eslint-disable-next-line
const ForwardRefPicker = forwardRef((props, ref) => {
  //

  return (
    <span ref={ref}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <StyledKeyboardDatePicker
          autoOk
          disableFuture
          disableToolbar
          emptyLabel="date"
          format="M/D/YYYY"
          invalidDateMessage="invalid date format"
          maxDateMessage="future dates not permitted"
          variant="inline"
          {...props}
        />
      </MuiPickersUtilsProvider>
    </span>
  );
});

ForwardRefPicker.propTypes = { onChange: T.func.isRequired, value: T.object };

export default ForwardRefPicker;
