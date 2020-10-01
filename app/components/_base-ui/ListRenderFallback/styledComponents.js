import styled from 'styled-components';

import { appColorA, textColorA } from 'styleConstants';

export const ErrorContainer = styled.div`
  color: ${textColorA};
  font-size: 1.8rem;
  text-align: center;
  padding-top: 4.9rem;
`;

export const IconContainer = styled.div`
  text-align: center;
  & svg {
    margin-bottom: 2rem;
  }
`;

export const MessageContainer = styled.div`
  color: ${appColorA};
  font-size: 2.2rem;
  text-align: center;
  padding-top: 4.9rem;
`;
