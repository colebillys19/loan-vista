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
    date: T.string,
    description: T.string,
    escrow: T.string,
    interest: T.string,
    principal: T.string,
    total: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
