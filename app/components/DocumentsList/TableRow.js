import React from 'react';
import T from 'prop-types';

import LinkButton from 'components/_base-ui/LinkButton';

import { StyledTableData } from './styledComponents';

const TableRow = ({ data, headers }) => (
  <tr>
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
  </tr>
);

TableRow.propTypes = {
  data: T.shape({
    'date sent': T.string,
    desc: T.string,
    from: T.string,
    pdf: T.string,
    'time sent': T.string,
    type: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
