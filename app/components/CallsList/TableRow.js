import React from 'react';
import T from 'prop-types';

import LinkButton from 'components/_base-ui/LinkButton';

import { StyledTableData } from './styledComponents';

const TableRow = ({ data, headers }) => (
  <tr>
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
  </tr>
);

TableRow.propTypes = {
  data: T.shape({
    audio: T.string,
    date: T.string,
    dept: T.string,
    desc: T.string,
    rep: T.string,
    time: T.string,
  }),
  headers: T.arrayOf(T.string).isRequired,
};

export default TableRow;
