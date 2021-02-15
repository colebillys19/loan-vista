import styled from 'styled-components';

import {
  backgroundColor,
  loadingAnimation,
  skeletonGrey,
} from 'styleConstants';

export const RowContainer = styled.div`
  height: ${({ reduceHeight }) => (reduceHeight ? '1.6rem' : '2.1rem')};
`;

export const RowStripe = styled.div`
  background-size: 500% 500%;
  background: linear-gradient(45deg, ${skeletonGrey}, ${backgroundColor});
  height: 1rem;
  position: relative;
  top: 0.4rem;
  visibility: ${({ reduceHeight }) => (reduceHeight ? 'hidden' : 'visible')};
  ${loadingAnimation}
`;

export const TableRowContainer = styled.tr`
  display: block;
  height: 2.1rem;
  position: relative;
`;

export const TableRowStripe = styled.td`
  background-size: 500% 500%;
  background: linear-gradient(45deg, ${skeletonGrey}, ${backgroundColor});
  display: block;
  height: 1rem;
  position: absolute;
  top: 0.4rem;
  width: 78.7rem;
  ${loadingAnimation}
`;
