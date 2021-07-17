import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from 'components/_shared/ListTable';

const CustomTableRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => (
      <StyledTableData key={header}>{data[header]}</StyledTableData>
    ))}
  </StyledTableRow>
);

CustomTableRow.propTypes = { data: T.object, headers: T.array };

export default CustomTableRow;
