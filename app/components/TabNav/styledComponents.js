import styled from 'styled-components';
import { Button, Tab, Tabs } from '@material-ui/core';

import { appColorB, textColorA, textColorB } from 'styleConstants';

export const DashboardButtonWrapper = styled.div`
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
  padding: 0;
  text-transform: none;
  & :hover {
    text-decoration: underline;
    background-color: transparent;
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
  position: relative;
  width: 83.7rem;
  overflow: visible;
  z-index: 100;
  & .MuiTabs-indicator {
    background-color: ${appColorB};
    height: 0.3rem;
    bottom: -0.3rem;
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
