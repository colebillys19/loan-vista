import styled from 'styled-components';

import { backgroundColor, appColorA, appColorB } from 'styleConstants';

export const HeaderContainer = styled.header`
  background-color: ${appColorA};
  height: 8rem;
  min-width: 120rem;
`;

export const SwatchA = styled.div`
  background-color: ${backgroundColor};
  height: 4rem;
  left: 2rem;
  position: absolute;
  top: 2rem;
  width: 4rem;
`;

export const SwatchB = styled.div`
  background-color: ${appColorB};
  height: 2rem;
  left: 8rem;
  position: absolute;
  top: 3rem;
  width: 2rem;
`;
