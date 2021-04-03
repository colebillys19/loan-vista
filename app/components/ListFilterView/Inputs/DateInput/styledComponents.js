import React from 'react';
import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

import { errorColor, textColorB } from 'styleConstants';

export const ErrorIndicator = styled.div`
  background-color: ${({ isError }) => (isError ? errorColor : 'transparent')};
  bottom: 0.1rem;
  height: 0.2rem;
  position: absolute;
  width: 11.5rem;
`;

export const DatePickerWrapper = styled.span`
  display: inline-block;
  height: 2.8rem;
  position: relative;
  vertical-align: top;
  width: 11.5rem;
`;

/* eslint-disable indent */
export const StyledKeyboardDatePicker = styled(({ isError, ...restProps }) => (
  <KeyboardDatePicker {...restProps} />
))`
  height: 2.8rem;
  width: 11.5rem;
  & .MuiInput-underline:after {
    transition: none;
  }
  & .MuiInputBase-input {
    margin-right: -0.6rem;
    min-width: 7.4rem;
  }
  & .MuiInput-underline.Mui-error:after {
    border-bottom-color: transparent;
  }
  & .MuiFormHelperText-root {
    display: none;
  }
`;

export const StyledTextField = styled(TextField)`
  & input {
    text-indent: 0.1rem;
  }
  & input::placeholder {
    color: ${textColorB};
    line-height: normal;
    opacity: 0.6;
    text-indent: 0.1rem;
  }
`;

// export const getColor = (isError, value) => {
//   if (value === null) {
//     return 'inherit';
//   }

//   if (isError) {
//     return 'red';
//   }

//   return textColorB;
// };
