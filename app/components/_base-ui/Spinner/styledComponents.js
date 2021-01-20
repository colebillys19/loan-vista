import styled from 'styled-components';

import { SpinnerIcon } from 'images/icons';

export const StyledSpinnerIcon = styled(SpinnerIcon)`
  animation: spin 1.1s linear infinite;
  display: inline-block;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
