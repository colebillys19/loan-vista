import React from 'react';
import T from 'prop-types';

import { StyledTableData, StyledTableRow } from 'components/_base-ui/ListTable';
import LinkButton from 'components/_base-ui/LinkButton';

const CustomTableRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => {
      if (header === 'audio') {
        return (
          <StyledTableData key={header}>
            <LinkButton onClick={() => null} text="request" />
          </StyledTableData>
        );
      }

      return <StyledTableData key={header}>{data[header]}</StyledTableData>;
    })}
  </StyledTableRow>
);

CustomTableRow.propTypes = { data: T.object, headers: T.array };

export default CustomTableRow;
