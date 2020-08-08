import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { appColorC } from 'styleConstants';

export const PhantomTabNavContainer = styled.div`
  left: 0;
  position: absolute;
  top: 1.2rem;
`;

export const StyledTab = styled(Tab)`
  flex-grow: 1;
  font-size: 1.4rem;
  height: 6rem;
  max-width: 22rem;
  pointer-events: none;
  text-transform: none;
  & .MuiTab-wrapper {
    visibility: hidden;
  }
`;

export const StyledTabs = styled(Tabs)`
  width: 83.7rem;
  & .MuiTabs-indicator {
    background-color: ${appColorC};
    height: 0.3rem;
    transition-delay: 0.05s;
    transition-duration: 0.4s;
  }
`;
