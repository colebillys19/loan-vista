import React from 'react';
import T from 'prop-types';

import { SkeletonContainer } from './styledComponents';

const PieSkeleton = ({ isError }) => (
  <SkeletonContainer isError={isError}>
    <svg height="0" style={{ position: 'absolute' }} width="0">
      <defs>
        <clipPath id="donutClipPath">
          <path d="M100,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100,0 Z M100,58 C76.8040405,58 58,76.8040405 58,100 C58,123.195959 76.8040405,142 100,142 C123.195959,142 142,123.195959 142,100 C142,76.8040405 123.195959,58 100,58 Z" />
        </clipPath>
      </defs>
    </svg>
  </SkeletonContainer>
);

PieSkeleton.propTypes = { isError: T.bool };

PieSkeleton.defaultProps = { isError: false };

export default PieSkeleton;
