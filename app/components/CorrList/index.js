/**
 * CorrList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import TableRow from './TableRow';
import {
  StyledTable,
  StyledTableHead,
  StyledTableHeader,
} from './styledComponents';

const CorrList = ({ corrData, headers }) => (
  <StyledTable>
    <StyledTableHead>
      <tr>
        {headers.map((header) => (
          <StyledTableHeader key={header} scope="col">
            {header}
          </StyledTableHeader>
        ))}
      </tr>
    </StyledTableHead>
    <tbody>
      {corrData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </tbody>
  </StyledTable>
);

CorrList.propTypes = {
  corrData: T.arrayOf(
    T.shape({
      dateSent: T.string,
      file: T.string,
      from: T.string,
      id: T.number,
      subject: T.string,
      timeSent: T.string,
      type: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
};

CorrList.defaultProps = {
  headers: ['dateSent', 'timeSent', 'type', 'from', 'subject', 'file'],
};

export default CorrList;
