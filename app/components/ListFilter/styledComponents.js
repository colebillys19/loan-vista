import React from 'react';
import styled from 'styled-components';
import { IconButton, MenuItem, Select, TextField } from '@material-ui/core';

import Button from 'components/_baseUI/Button';
import { appTextColorA, appTextColorB } from 'styleConstants';

export const DisableWrapper = styled.span`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  display: inline-block;
  vertical-align: top;
  & :not(:first-of-type) {
    margin-left: 2rem;
  }
`;

export const StyledButton = styled(Button)`
  display: inline-block;
  height: 3.3rem;
  position: relative;
  top: -0.3rem;
  vertical-align: top;
`;

export const StyledForm = styled.form`
  background: #fff;
  background: linear-gradient(90deg, #fff 0%, #fff 60%, #f6f6f6 100%);
  border: 0.3rem solid #ccc;
  height: 6.4rem;
  padding: 1.5rem 0 0 2.1rem;
  position: relative;
  & .MuiInputBase-input {
    color: ${appTextColorA};
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: inline-block;
  margin-left: 2rem;
  padding: 0.4rem;
  position: relative;
  top: -0.3rem;
  vertical-align: top;
`;

export const StyledLabel = styled.label`
  color: ${appTextColorB};
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.8rem;
  padding-top: 0.7rem;
  vertical-align: top;
`;

export const StyledMenuItem = styled(({ isClear, ...restProps }) => (
  <MenuItem {...restProps} />
))`
  color: ${({ isClear }) => (isClear ? appTextColorB : 'inherit')};
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  opacity: ${({ isClear }) => (isClear ? '0.6' : 'inherit')};
`;

export const StyledSelect = styled(Select)`
  display: inline-block;
  min-width: 11rem;
  & .MuiInputBase-input {
    color: ${({ value }) => (value === 0 ? appTextColorB : 'inherit')};
    opacity: ${({ value }) => (value === 0 ? '0.6' : 'inherit')};
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
  min-width: 13.5rem;
  & input::placeholder {
    color: ${appTextColorB};
    opacity: 0.6;
  }
`;
