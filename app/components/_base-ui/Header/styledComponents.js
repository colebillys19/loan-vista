import styled from 'styled-components';

import { appColorA, appColorB, backgroundColor } from 'styleConstants';

export const HeaderContainer = styled.header`
  background-color: ${appColorA};
  font-size: 3rem;
  height: 8rem;
  letter-spacing: 0.5rem;
  min-width: 122rem;
  padding: 2.4rem 0 0 5rem;
  & span:first-of-type {
    color: ${backgroundColor};
  }
  & span:last-of-type {
    color: ${appColorB};
  }
`;
