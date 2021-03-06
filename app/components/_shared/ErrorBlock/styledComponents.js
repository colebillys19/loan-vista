import styled from 'styled-components';

import { appColorA } from 'styleConstants';

export const Message = styled.div`
  color: ${appColorA};
  font-size: 2.2rem;
  text-align: center;
  &:first-of-type {
    margin-top: 3rem;
  }
`;
