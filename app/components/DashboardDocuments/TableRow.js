import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from 'components/_base-ui/ListTable';
import LinkButton from 'components/_base-ui/LinkButton';

const TableRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => {
      if (header === 'pdf') {
        return (
          <StyledTableData key={header}>
            <LinkButton onClick={() => null} text="download" />
          </StyledTableData>
        );
      }

      return <StyledTableData key={header}>{data[header]}</StyledTableData>;
    })}
  </StyledTableRow>
);

TableRow.propTypes = { data: T.object, headers: T.array };

export default TableRow;
