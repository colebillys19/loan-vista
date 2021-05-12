import styled from 'styled-components';

import { appColorA, appColorB, backgroundColor } from 'styleConstants';

export const HeaderContainer = styled.header`
  background-color: ${appColorA};
  font-size: 2.2rem;
  height: 6rem;
  letter-spacing: 0.4rem;
  min-width: 122rem;
  padding: 1.7rem 0 0 5rem;
  & span:first-of-type {
    color: ${backgroundColor};
  }
  & span:last-of-type {
    color: ${appColorB};
  }
`;
