import React from 'react';
import styled from 'styled-components';

import { skeletonGrey, textColorB } from 'styleConstants';

export const Key = styled.span`
  color: ${textColorB};
`;

export const ListHeading = styled.h3`
  margin: 0 0 1rem;
`;

export const Row = styled(({ reduceHeight, ...restProps }) => (
  <div {...restProps} />
))`
  bottom: ${({ reduceHeight }) => (reduceHeight ? '0.5rem' : '0')};
  height: ${({ reduceHeight }) => (reduceHeight ? '1.6rem' : '2.1rem')};
  position: relative;
  width: 100%;
`;

export const SkeletonRowContainer = styled(({ reduceHeight, ...restProps }) => (
  <div {...restProps} />
))`
  height: ${({ reduceHeight }) => (reduceHeight ? '1.6rem' : '2.1rem')};
`;

export const SkeletonRowStripe = styled(({ reduceHeight, ...restProps }) => (
  <div {...restProps} />
))`
  background-color: ${({ reduceHeight }) =>
    reduceHeight ? 'transparent' : skeletonGrey};
  height: 1rem;
  position: relative;
  top: 0.4rem;
`;

export const Value = styled.span`
  float: right;
`;
