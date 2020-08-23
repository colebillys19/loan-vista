import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

import { appColorA } from 'styleConstants';

export const SpinnerContainer = styled.section`
  padding-top: 8.5rem;
  text-align: center;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  & svg {
    color: ${appColorA};
  }
`;
