import React from 'react';
import T from 'prop-types';

import {
  StyledTableData,
  StyledTableRow,
} from 'components/_base-ui/GradientListTable';
import LinkButton from 'components/_base-ui/LinkButton';

import DescCell from './DescCell';

const TableRow = ({ data, headers }) => (
  <StyledTableRow>
    {headers.map((header) => {
      if (header === 'desc') {
        return <DescCell key={header}>{data[header]}</DescCell>;
      }

      if (header === 'audio') {
        return (
          <StyledTableData key="audio">
            <LinkButton onClick={() => null} text="request" />
          </StyledTableData>
        );
      }

      return <StyledTableData key={header}>{data[header]}</StyledTableData>;
    })}
  </StyledTableRow>
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
