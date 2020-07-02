import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 120rem;
`;

export const HomePageButtonWrapper = styled.div`
  display: inline-block;
  height: 6rem;
  width: 36rem;

  outline: 1px solid green;
`;

export const StyledTab = styled(Tab)`
  flex-grow: 1;
  height: 6rem;
  max-width: 30rem;
`;

export const StyledTabs = styled(Tabs)`
  display: inline-block;
  height: 6rem;
  margin-left: 0.3rem;
  width: 83.7rem;
`;

export const TabNavWrapper = styled.div`
  background-color: coral;
  height: 6rem;
`;
