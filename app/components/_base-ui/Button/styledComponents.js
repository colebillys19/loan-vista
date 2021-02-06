import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { appColorA, appColorAOpaque, backgroundColor } from 'styleConstants';

export const StyledButton = styled(Button)`
  background-color: ${appColorA};
  color: ${backgroundColor};
  font-size: 1.4rem;
  min-width: 0;
  padding: 0.5rem 1.2rem;
  text-transform: none;
  & :hover {
    background-color: ${appColorAOpaque};
  }
`;
