import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from './styledComponents';

const TableRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => (
      <StyledTableData key={header}>{data[header]}</StyledTableData>
    ))}
  </StyledTableRow>
);

TableRow.propTypes = { data: T.object, headers: T.array };

export default TableRow;
