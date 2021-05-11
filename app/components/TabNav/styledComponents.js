import React from 'react';
import styled from 'styled-components';
import { Button, Tab, Tabs } from '@material-ui/core';

import {
  appColorA,
  backgroundColor,
  textColorA,
  textColorAOpaque,
  textColorB,
} from 'styleConstants';

export const StyledButton = styled(({ isOpaque, ...restProps }) => (
  <Button {...restProps} />
))`
  color: ${({ isOpaque }) => (isOpaque ? textColorAOpaque : textColorA)};
  display: block;
  font-size: 2.2rem;
  height: 6rem;
  margin: 0 auto;
  padding: 0;
  position: absolute;
  text-transform: none;
  width: 36rem;
  &:hover {
    background-color: transparent;
    text-decoration: underline;
    opacity: 1;
  }
  &:focus {
    &:focus {
      background-color: #ffffff;
      box-shadow: inset 1rem 0 3rem ${backgroundColor},
        inset -1rem 0 3rem ${backgroundColor};
      text-decoration: underline;
      outline: 0.1rem solid #ffffff;
    }
  }
`;

export const StyledTab = styled(Tab)`
  color: ${textColorB};
  flex-grow: 1;
  font-size: 1.4rem;
  height: 6rem;
  max-width: 22rem;
  text-transform: none;
  &.Mui-selected {
    color: ${textColorA};
    text-decoration: none;
  }
  &:hover {
    color: ${textColorA};
    text-decoration: underline;
  }
  &:focus {
    background-color: #ffffff;
    box-shadow: inset 1rem 0 1rem ${backgroundColor},
      inset -1rem 0 1rem ${backgroundColor};
    text-decoration: underline;
    outline: 0.1rem solid #ffffff;
  }
`;

export const StyledTabs = styled(Tabs)`
  display: inline-block;
  left: 36.3rem;
  overflow: visible;
  position: relative;
  width: 83.7rem;
  z-index: 100;
  & .MuiTabs-indicator {
    background-color: ${appColorA};
    bottom: -0.3rem;
    height: 0.3rem;
  }
  & .MuiTabs-scroller {
    overflow: visible !important;
  }
`;

export const TabNavWrapper = styled.div`
  height: 6rem;
  margin: 0 auto;
  width: 120rem;
`;
