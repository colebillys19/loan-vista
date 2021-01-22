import React, { Fragment } from 'react';
import T from 'prop-types';

import { SkeletonRowContainer, SkeletonRowStripe } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const Skeleton = ({ numRows }) => (
  <Fragment>
    {new Array(numRows).fill(null).map((val, i) => (
      <SkeletonRowContainer key={i}>
        <SkeletonRowStripe />
      </SkeletonRowContainer>
    ))}
  </Fragment>
);

Skeleton.propTypes = { numRows: T.number };

Skeleton.defaultProps = { numRows: 1 };

export default Skeleton;
