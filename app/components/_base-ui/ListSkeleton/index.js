import React, { Fragment } from 'react';
import T from 'prop-types';

import Row from './Row';
import TableRow from './TableRow';

/* eslint-disable react/no-array-index-key */
const ListSkeleton = ({ isTable, numRows, smallRows }) => (
  <Fragment>
    {new Array(numRows)
      .fill(null)
      .map((val, i) =>
        isTable ? (
          <TableRow key={i} />
        ) : (
          <Row key={i} reduceHeight={smallRows.includes(i)} />
        ),
      )}
  </Fragment>
);

ListSkeleton.propTypes = {
  isTable: T.bool,
  numRows: T.number.isRequired,
  smallRows: T.arrayOf(T.number),
};

ListSkeleton.defaultProps = { isTable: false, smallRows: [] };

export default ListSkeleton;
