import styled from 'styled-components';

import { loadingAnimationStyles, skeletonGreyOpaque } from 'styleConstants';

export const RowContainer = styled.div`
  height: ${({ reduceHeight }) => (reduceHeight ? '1.6rem' : '2.1rem')};
`;

export const RowStripe = styled.div`
  height: 1rem;
  position: relative;
  top: 0.4rem;
  visibility: ${({ reduceHeight }) => (reduceHeight ? 'hidden' : 'visible')};
  background-color: ${skeletonGreyOpaque};
  ${({ isError }) => (isError ? '' : loadingAnimationStyles)}
`;

export const TableRowContainer = styled.tr`
  display: block;
  height: 2.1rem;
  position: relative;
`;

export const TableRowStripe = styled.td`
  display: block;
  height: 1rem;
  position: absolute;
  top: 0.4rem;
  width: 78.7rem;
  background-color: ${skeletonGreyOpaque};
  ${({ isError }) => (isError ? '' : loadingAnimationStyles)}
`;
