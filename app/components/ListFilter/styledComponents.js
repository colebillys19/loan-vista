import styled from 'styled-components';
import { MenuItem, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { appTextColorA } from 'styleConstants';

export const StyledForm = styled.form`
  outline: 1px solid #ddd;
  padding: 0.5rem;
  & .MuiInputBase-input {
    color: ${appTextColorA};
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;

export const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
  & .MuiInputBase-input {
    width: 8rem;
  }
`;

export const StyledLabel = styled.label`
  border-bottom: 0.1rem solid black;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`;

export const StyledTextField = styled(TextField)`
  & input::placeholder {
    color: ${appTextColorA};
    opacity: 1;
  }
`;
