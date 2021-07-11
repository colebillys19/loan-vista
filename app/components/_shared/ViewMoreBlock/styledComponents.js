import styled from 'styled-components';

import { borderGrey } from 'styleConstants';

export const ViewMoreContainer = styled.div`
  border-top: 0.1rem solid ${borderGrey};
  margin-top: 2rem;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
  padding-top: 1.5rem;
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  text-align: center;
`;
