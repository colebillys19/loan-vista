import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const ContentContainer = styled.div`
  background-color: white;
  max-width: 72rem;
  padding: 6rem;
  pointer-events: all;
  position: relative;
  text-align: center;
`;

export const FlexContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100vh;
  justify-content: center;
  pointer-events: none;
`;

export const Message = styled.div`
  font-size: 2.2rem;
  margin-top: 3rem;
`;

export const StyledIconButton = styled(IconButton)`
  background-color: rgba(0, 0, 0, 0) !important;
  padding: 0.3rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;
