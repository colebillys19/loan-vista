/**
 * CallsList
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

const CallsList = ({ callsData, headers }) => (
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
      {callsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </tbody>
  </StyledTable>
);

CallsList.propTypes = {
  callsData: T.arrayOf(
    T.shape({
      audio: T.string,
      date: T.string,
      dept: T.string,
      details: T.string,
      id: T.number,
      rep: T.string,
      time: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
};

CallsList.defaultProps = {
  headers: ['date', 'time', 'dept', 'details', 'rep', 'audio'],
};

export default CallsList;
