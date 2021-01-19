import styled from 'styled-components';

import { backgroundColor } from 'styleConstants';

export const CardContainer = styled.section`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #fff 50%,
    ${backgroundColor} 100%
  );
  margin: 3rem 0 3rem;
  padding: 2rem 2.5rem 3rem;
  position: relative;
`;

export const StyledH2 = styled.h2`
  margin: 0 0 2rem;
`;
