import React from 'react';
import T from 'prop-types';

import { StyledTableData } from 'components/_base-ui/ListTable';

import { CustomTableRow } from './styledComponents';

const StopsListRow = ({ data, headers }) => (
  <CustomTableRow>
    {headers.map((header) => (
      <StyledTableData key={header}>{data[header]}</StyledTableData>
    ))}
  </CustomTableRow>
);

StopsListRow.propTypes = {
  data: T.shape({ date: T.string, desc: T.string, name: T.string }),
  headers: T.array,
};

export default StopsListRow;
