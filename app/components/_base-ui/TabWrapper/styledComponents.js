import styled from 'styled-components';

import { appColorA, borderGrey, backgroundColor } from 'styleConstants';

export const BottomBorder = styled.div`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    ${borderGrey} 50%,
    ${backgroundColor} 100%
  );
  height: 0.1rem;
  left: 0;
  position: absolute;
  bottom: -0.1rem;
  width: 83.7rem;
`;

export const StyledSection = styled.section`
  background: ${backgroundColor};
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #fff 50%,
    ${backgroundColor} 100%
  );
  border-top: 0.3rem solid ${appColorA};
  display: inline-block;
  margin-bottom: 4rem;
  min-height: 112rem;
  position: relative;
  vertical-align: top;
  width: 83.7rem;
`;
