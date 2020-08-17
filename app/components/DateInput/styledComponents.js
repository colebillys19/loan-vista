import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

import { appTextColorB } from 'styleConstants';

/* eslint-disable indent */
export const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
  & .MuiInputBase-input {
    color: ${({ value }) =>
      value === null ? appTextColorB : 'inherit'} !important;
    width: 6.8rem;
  }
  & .MuiFormHelperText-root {
    display: none;
  }
`;

export const StyledTextField = styled(TextField)`
  & input::placeholder {
    color: ${appTextColorB};
    opacity: 0.6;
  }
`;
