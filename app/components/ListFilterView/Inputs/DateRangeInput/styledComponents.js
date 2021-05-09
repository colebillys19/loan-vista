import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MenuItem, Select } from '@material-ui/core';

import { textColorB } from 'styleConstants';

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
  &.Mui-disabled div {
    color: rgba(0, 0, 0, 0.38);
  }
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
