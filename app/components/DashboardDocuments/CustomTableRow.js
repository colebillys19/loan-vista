import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from 'components/_shared/ListTable';
import LinkButton from 'components/_shared/LinkButton';

const CustomTableRow = ({ data, headers }) => (
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

CustomTableRow.propTypes = { data: T.object, headers: T.array };

export default CustomTableRow;
