import React, { Fragment } from 'react';
import T from 'prop-types';

import { SkeletonRowContainer, SkeletonRowStripe } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const Skeleton = ({ numRows, smallRows }) => (
  <Fragment>
    {new Array(numRows).fill(null).map((val, i) => (
      <SkeletonRowContainer key={i} reduceHeight={smallRows.includes(i)}>
        <SkeletonRowStripe reduceHeight={smallRows.includes(i)} />
      </SkeletonRowContainer>
    ))}
  </Fragment>
);

Skeleton.propTypes = { numRows: T.number, smallRows: T.arrayOf(T.number) };

Skeleton.defaultProps = { numRows: 1, smallRows: [] };

export default Skeleton;
