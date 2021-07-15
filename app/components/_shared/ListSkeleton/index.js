import React, { Fragment } from 'react';
import T from 'prop-types';

import Row from './Row';
import TableRow from './TableRow';

/* eslint-disable react/no-array-index-key */
const ListSkeleton = ({ isError, isTable, numRows, smallRows }) => (
  <Fragment>
    {new Array(numRows)
      .fill(null)
      .map((val, i) =>
        isTable ? (
          <TableRow key={i} isError={isError} />
        ) : (
          <Row key={i} isError={isError} reduceHeight={smallRows.includes(i)} />
        ),
      )}
  </Fragment>
);

ListSkeleton.propTypes = {
  isError: T.bool,
  isTable: T.bool,
  numRows: T.number.isRequired,
  smallRows: T.arrayOf(T.number),
};

ListSkeleton.defaultProps = { isError: false, isTable: false, smallRows: [] };

export default ListSkeleton;
