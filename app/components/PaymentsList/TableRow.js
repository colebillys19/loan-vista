import React from 'react';
import T from 'prop-types';

import LinkButton from 'components/_base-ui/LinkButton';

import { StyledTableData } from './styledComponents';

const TableRow = ({ data, headers }) => (
  <tr>
    {headers.map((header) => {
      if (header === '') {
        return (
          <StyledTableData key={header}>
            <LinkButton onClick={() => null} text="more" />
          </StyledTableData>
        );
      }

      return <StyledTableData key={header}>{data[header]}</StyledTableData>;
    })}
  </tr>
);

TableRow.propTypes = {
  data: T.shape({
    date: T.string,
    desc: T.string,
    escrow: T.string,
    interest: T.string,
    principal: T.string,
    total: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
