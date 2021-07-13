import styled from 'styled-components';

import { backgroundColor } from 'styleConstants';

export const SpinnerContainer = styled.div`
  left: 40.2rem;
  position: relative;
  padding: 2rem 0;
`;

export const StyledTableRow = styled.tr`
  ${({ isEven }) =>
    isEven
      ? `background: linear-gradient(90deg, ${backgroundColor} 0%, #f6f6f6 30%, #f6f6f6 70%, ${backgroundColor} 100%);`
      : ''}
`;
