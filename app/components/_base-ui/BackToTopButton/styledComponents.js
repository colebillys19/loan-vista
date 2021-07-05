import styled from 'styled-components';

import { appColorA } from 'styleConstants';
import ArrowButton from 'components/_base-ui/ArrowButton';

export const StyledArrowButton = styled(ArrowButton)`
  background-color: rgba(248, 248, 255, 0.8);
  border: 0.2rem solid ${appColorA};
  bottom: 1rem;
  display: inline;
  padding: 1rem;
  position: fixed;
  right: 1rem;
`;
