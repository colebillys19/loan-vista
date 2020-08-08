import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { appColorC, appTextColorA } from 'styleConstants';

export const ContentContainer = styled.div`
  height: 6rem;
  margin: 0 auto;
  width: 120rem;
`;

export const HomeButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  width: 36rem;
`;

export const StyledButton = styled(Button)`
  color: ${appTextColorA};
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
  flex-grow: 1;
  font-size: 1.4rem;
  height: 6rem;
  max-width: 22rem;
  text-transform: none;
  z-index: 1;
`;

export const StyledTabs = styled(Tabs)`
  position: relative;
  & .MuiTabs-indicator {
    background-color: ${appColorC};
    height: 0.3rem;
  }
`;

export const TabNavWrapper = styled.div`
  margin-bottom: 0.3rem;
`;

export const TabsContainer = styled.div`
  position: relative;
  display: inline-block;
  left: 36.3rem;
  width: 83.7rem;
`;
