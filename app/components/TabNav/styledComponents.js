import styled from 'styled-components';
import { Button, Tab, Tabs } from '@material-ui/core';

import { appColorA, textColorA, textColorB } from 'styleConstants';

export const DashboardButtonContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  width: 36rem;
`;

export const StyledButton = styled(Button)`
  color: ${textColorA};
  display: block;
  font-size: 2.2rem;
  height: 6rem;
  margin: 0 auto;
  opacity: ${({ isOpaque }) => (isOpaque ? '0.5' : '1')};
  padding: 0;
  text-transform: none;
  & :hover {
    background-color: transparent;
    text-decoration: underline;
    opacity: 1;
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
  }
  & :hover {
    color: ${textColorA};
    text-decoration: underline;
  }
  &.Mui-selected {
    text-decoration: none;
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
