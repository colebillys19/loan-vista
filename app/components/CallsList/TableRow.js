import React from 'react';
import T from 'prop-types';

// import ExpandableTableCell from 'components/base_ui/ExpandableTableCell';

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
    audio: T.string,
    date: T.string,
    dept: T.string,
    details: T.string,
    rep: T.string,
    time: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
