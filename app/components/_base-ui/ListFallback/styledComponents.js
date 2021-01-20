import styled from 'styled-components';

import { appColorA } from 'styleConstants';

export const FallbackContainer = styled.section`
  color: ${appColorA};
  font-size: 2.2rem;
  text-align: center;
  padding-top: 4.9rem;
`;

export const IconContainer = styled.div`
  text-align: center;
  & svg {
    margin-bottom: 2rem;
    margin-top: -0.3rem;
  }
`;
