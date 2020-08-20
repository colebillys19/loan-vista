import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';

import { appColorA, appColorAOpaque } from 'styleConstants';

export const StyledButton = styled(ButtonBase)`
  letter-spacing: 0.1rem;
  color: ${appColorA};
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${appColorAOpaque};
  }
`;
