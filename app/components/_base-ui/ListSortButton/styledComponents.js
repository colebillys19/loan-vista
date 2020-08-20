import styled from 'styled-components';

export const ContentContainer = styled.span`
  padding-right: ${({ isActive }) => (isActive ? '1rem' : 'inherit')};
  & button {
    text-transform: uppercase;
  }
`;
