import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

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
