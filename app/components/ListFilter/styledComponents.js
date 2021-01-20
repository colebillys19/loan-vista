import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { IconButton, MenuItem, Select, TextField } from '@material-ui/core';

import Button from 'components/_base-ui/Button';
import { textColorA, textColorB } from 'styleConstants';

export const DisableWrapper = styled.span`
  display: inline-block;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  vertical-align: top;
  & :not(:first-of-type) {
    margin-left: 2rem;
  }
`;

export const StyledButton = styled(Button)`
  display: inline-block;
  height: 3.3rem;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  position: relative;
  top: -0.3rem;
  vertical-align: top;
  & span {
    color: #ffffff;
  }
`;

export const StyledForm = styled.form`
  margin: 1.6rem 0;
  padding: 0.6rem 0 0 2.4rem;
  position: relative;
  & .MuiInputBase-input {
    color: ${textColorA};
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
  color: ${textColorB};
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.8rem;
  padding-top: 0.7rem;
  vertical-align: top;
`;

/* eslint-disable react/prop-types */
export const StyledMenuItem = styled(
  forwardRef(({ isClear, ...restProps }, ref) => (
    <MenuItem ref={ref} {...restProps} />
  )),
)`
  color: ${({ isClear }) => (isClear ? textColorB : 'inherit')};
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  opacity: ${({ isClear }) => (isClear ? '0.6' : 'inherit')};
`;

export const StyledSelect = styled(Select)`
  display: inline-block;
  min-width: 11rem;
  & .MuiInputBase-input {
    color: ${({ value }) => (value === 0 ? textColorB : 'inherit')};
    opacity: ${({ value }) => (value === 0 ? '0.6' : 'inherit')};
    position: relative;
    text-indent: 0.1rem;
    top: 0.2rem;
  }
  & .MuiInputBase-input::placeholder {
    text-indent: 0.1rem;
  }
  &.MuiInput-underline:after {
    transition: none;
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
  & input {
    line-height: normal;
    text-indent: 0.1rem;
  }
  & input::placeholder {
    color: ${textColorB};
    opacity: 0.6;
    text-indent: 0.1rem;
  }
  & .MuiInput-underline:after {
    transition: none;
  }
`;
