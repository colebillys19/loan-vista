import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

import { appColorA, appTextColorB } from 'styleConstants';

import { getColor } from './helpers';

/* eslint-disable indent */
export const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
  width: 11.5rem;
  & .MuiInputBase-input {
    color: ${({ isError, value }) => getColor(isError, value)} !important;
  }
  & .MuiInput-underline.Mui-error:after {
    border-bottom-color: ${appColorA};
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
