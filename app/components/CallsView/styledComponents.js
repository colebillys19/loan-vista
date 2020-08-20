import styled from 'styled-components';

import { backgroundColor } from 'styleConstants';

export const GradientBorder = styled.div`
  background: linear-gradient(
    90deg,
    #fff 0%,
    ${backgroundColor} 50%,
    #fff 100%
  );
  height: 0.1rem;
`;
