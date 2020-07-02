import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export const ContentWrapper = styled.div`
  background-color: #bbb;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 120rem;
`;

export const HomePageButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 36rem;
`;

export const StyledButton = styled(Button)`
  display: block;
  font-size: 2rem;
  padding: 0;
  line-height: 1.8rem;
  margin: 0 auto;
  text-transform: none;
  & :hover {
    text-decoration: underline;
    background-color: transparent;
  }
`;

export const StyledTab = styled(Tab)`
  flex-grow: 1;
  font-size: 1.4rem;
  height: 100%;
  max-width: 30rem;
  text-transform: none;
`;

export const StyledTabs = styled(Tabs)`
  display: inline-block;
  height: 100%;
  left: 36.3rem;
  position: relative;
  width: 83.7rem;
  & .MuiTabs-scroller {
    height: 100%;
    position: relative;
  }
  & .MuiTabs-flexContainer {
    height: 100%;
    position: relative;
  }
  & .MuiTabs-indicator {
    background-color: royalblue;
    height: 0.5rem;
  }
`;

export const TabNavWrapper = styled.div`
  height: 6rem;
  margin-bottom: 0.3rem;
`;
