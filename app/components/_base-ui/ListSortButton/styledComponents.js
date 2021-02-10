import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { appColorA, textColorB } from 'styleConstants';

export const StyledButton = styled(({ isActive, ...restProps }) => (
  <Button {...restProps} />
))`
  border-radius: 0;
  color: ${({ isActive }) => (isActive ? appColorA : textColorB)};
  font-family: Arial, sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  line-height: 1.4rem;
  min-width: 0;
  padding: 0;
  & .MuiButton-endIcon {
    margin: 0 0 0 7px;
  }
  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`;
