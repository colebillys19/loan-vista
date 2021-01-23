import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from 'components/_base-ui/ListTable';

const StopsListRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => (
      <StyledTableData key={header}>{data[header]}</StyledTableData>
    ))}
  </StyledTableRow>
);

StopsListRow.propTypes = {
  data: T.shape({ date: T.string, desc: T.string, name: T.string }),
  headers: T.array,
};

export default StopsListRow;
