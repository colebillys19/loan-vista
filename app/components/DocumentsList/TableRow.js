import React from 'react';
import T from 'prop-types';

import { StyledTableData } from './styledComponents';

const TableRow = ({ data, headers }) => (
  <tr>
    {headers.map((header) => (
      <StyledTableData key={header}>{data[header]}</StyledTableData>
    ))}
  </tr>
);

TableRow.propTypes = {
  data: T.shape({
    dateSent: T.string,
    desc: T.string,
    file: T.string,
    from: T.string,
    timeSent: T.string,
    type: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
