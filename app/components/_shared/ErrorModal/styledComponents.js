import styled from 'styled-components';

import { backgroundColor } from 'styleConstants';

export const ContentContainer = styled.div`
  background-color: ${backgroundColor};
  border-radius: 0.5rem;
  max-width: 72rem;
  padding: 6rem;
  pointer-events: all;
  position: relative;
  text-align: center;
  transition: opacity 0.2s linear;
`;

export const FlexContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100vh;
  justify-content: center;
  pointer-events: none;
`;
