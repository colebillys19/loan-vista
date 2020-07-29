import styled from 'styled-components';

import { appColorA, appColorB, appColorC } from 'styleConstants';

export const HeaderWrapper = styled.header`
  background-color: ${appColorA};
  height: 8rem;
`;

export const SwatchA = styled.div`
  background-color: ${appColorB};
  height: 4rem;
  left: 2rem;
  position: absolute;
  top: 2rem;
  width: 4rem;
`;

export const SwatchB = styled.div`
  background-color: ${appColorC};
  height: 2rem;
  left: 8rem;
  position: absolute;
  top: 3rem;
  width: 2rem;
`;
