import styled from 'styled-components';

import { backgroundColor, borderGrey } from 'styleConstants';

const GradientBorder = styled.div`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    ${borderGrey} 50%,
    ${backgroundColor} 100%
  );
  bottom: ${({ bottom }) => bottom};
  height: 0.1rem;
  left: 0;
  position: absolute;
  top: ${({ top }) => top};
  width: 83.7rem;
`;

export default GradientBorder;
