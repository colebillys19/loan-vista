import React from 'react';
import T from 'prop-types';

import { SkeletonRowContainer, SkeletonRowStripe } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const Skeleton = ({ numRows }) => (
  <div>
    {new Array(numRows).fill(null).map((val, i) => (
      <SkeletonRowContainer key={i}>
        <SkeletonRowStripe />
      </SkeletonRowContainer>
    ))}
  </div>
);

Skeleton.propTypes = { numRows: T.number };

Skeleton.defaultProps = { numRows: 1 };

export default Skeleton;
