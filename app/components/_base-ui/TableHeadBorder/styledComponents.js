import styled from 'styled-components';

import { backgroundColor, borderGrey } from 'styleConstants';

export const BorderContainer = styled.div`
  position: relative;
  height: 0.1rem;
`;

export const GradientBorder = styled.div`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    ${borderGrey} 40%,
    ${borderGrey} 60%,
    ${backgroundColor} 100%
  );
  display: ${({ hideBottom }) => (hideBottom ? 'none' : 'inherit')};
  height: 0.1rem;
  position: ${({ isBottom }) => (isBottom ? 'absolute' : 'inherit')};
  top: ${({ isBottom }) => (isBottom ? '3.6rem' : 'inherit')};
  width: 100%;
`;
