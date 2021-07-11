import React from 'react';
import T from 'prop-types';

import { StyledTableRow } from 'components/_shared/ListTable';
import LinkButton from 'components/_shared/LinkButton';

import { CustomTableData } from './styledComponents';

const CustomTableRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => {
      if (header === 'audio') {
        return (
          <CustomTableData key={header}>
            <LinkButton onClick={() => null} text="request" />
          </CustomTableData>
        );
      }

      return <CustomTableData key={header}>{data[header]}</CustomTableData>;
    })}
  </StyledTableRow>
);

CustomTableRow.propTypes = { data: T.object, headers: T.array };

export default CustomTableRow;
