import styled from 'styled-components';
import { IconButton, MenuItem, Select, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

import Button from 'components/_baseUI/Button';
import { appTextColorA } from 'styleConstants';

export const StyledButton = styled(Button)`
  height: 3.3rem;
  position: absolute;
  right: 2rem;
  top: 1.1rem;
`;

export const StyledForm = styled.form`
  padding: 1.5rem 2rem;
  position: relative;
  & .MuiInputBase-input {
    color: ${appTextColorA};
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;

export const StyledIconButton = styled(IconButton)`
  padding: 0.4rem;
  position: absolute;
  right: 8.9rem;
  top: 1.1rem;
`;

export const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
  & .MuiInputBase-input {
    width: 7rem;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.8rem;
  position: relative;
  top: 0.2rem;
  & :not(:first-of-type) {
    margin-left: 2rem;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`;

export const StyledSelect = styled(Select)`
  min-width: 11rem;
  & .MuiInputBase-input {
    position: relative;
    top: 0.2rem;
  }
  & .MuiSelect-icon {
    top: 0.5rem;
  }
  &.Mui-focused .MuiInputBase-input {
    background-color: transparent;
  }
`;

export const StyledTextField = styled(TextField)`
  min-width: 13.9rem;
  & input::placeholder {
    color: ${appTextColorA};
    opacity: 1;
  }
`;
