import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import { appColorA } from 'styleConstants';

export const SpinnerContainer = styled.section`
  padding-top: 5rem;
  text-align: center;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  & svg {
    color: ${appColorA};
  }
`;
