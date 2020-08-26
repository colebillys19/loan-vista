import styled from 'styled-components';

import { appColorA, backgroundColor } from 'styleConstants';

export const StyledSection = styled.section`
  background: ${backgroundColor};
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #fff 30%,
    #fff 70%,
    ${backgroundColor} 100%
  );
  border-top: 0.3rem solid ${appColorA};
  display: inline-block;
  margin-bottom: 4rem;
  min-height: 116rem;
  vertical-align: top;
  width: 83.7rem;
`;
