/**
 * CallsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListTable from 'components/_base-ui/ListTable';
import ListTableHead from 'components/_base-ui/ListTableHead';

import TableRow from './TableRow';
import { StyledTableHeader } from './styledComponents';

const CallsList = ({ callsData, headers }) => (
  <ListTable>
    <ListTableHead>
      <tr>
        {headers.map((header) => (
          <StyledTableHeader key={header} scope="col">
            {header}
          </StyledTableHeader>
        ))}
      </tr>
    </ListTableHead>
    <tbody>
      {callsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </tbody>
  </ListTable>
);

CallsList.propTypes = {
  callsData: T.arrayOf(
    T.shape({
      audio: T.string,
      date: T.string,
      dept: T.string,
      desc: T.string,
      id: T.number,
      rep: T.string,
      time: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
};

CallsList.defaultProps = {
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
};

export default CallsList;
