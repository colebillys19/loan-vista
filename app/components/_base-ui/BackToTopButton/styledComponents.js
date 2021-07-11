import styled from 'styled-components';

import { appColorA, backgroundColorOpaque } from 'styleConstants';
import ArrowButton from 'components/_base-ui/ArrowButton';

export const StyledArrowButton = styled(ArrowButton)`
  background-color: ${backgroundColorOpaque};
  border: 0.2rem solid ${appColorA};
  bottom: 1rem;
  display: inline;
  padding: 1rem;
  position: fixed;
  right: 1rem;
`;
