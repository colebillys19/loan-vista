import React from 'react';
import styled, { css } from 'styled-components';

import { backgroundColor, skeletonGrey } from 'styleConstants';

const animationStyles = css`
  background: linear-gradient(45deg, ${skeletonGrey}, ${backgroundColor});
  background-size: 800% 800%;

  -webkit-animation: Webkit 2s ease infinite;
  -moz-animation: Moz 2s ease infinite;
  animation: Standard 2s ease infinite;

  @-webkit-keyframes Webkit {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @-moz-keyframes Moz {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @keyframes Standard {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const RowContainer = styled(({ reduceHeight, ...restProps }) => (
  <div {...restProps} />
))`
  height: ${({ reduceHeight }) => (reduceHeight ? '1.6rem' : '2.1rem')};
`;

export const RowStripe = styled(({ reduceHeight, ...restProps }) => (
  <div {...restProps} />
))`
  height: 1rem;
  position: relative;
  top: 0.4rem;
  ${({ reduceHeight }) => !reduceHeight && animationStyles}
`;

export const TableRowContainer = styled.tr`
  display: block;
  height: 2.1rem;
`;

export const TableRowStripe = styled.td`
  display: block;
  height: 1rem;
  position: relative;
  top: 0.4rem;
  ${animationStyles}
`;
