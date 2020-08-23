/**
 * CallsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
} from 'components/_base-ui/ListTable';
import ListSortButton from 'components/_base-ui/ListSortButton';

import TableRow from './TableRow';

const CallsList = ({ callsData, headers, sortAsc, sortColumn }) => (
  <StyledTable>
    <StyledTableHead>
      <StyledTableRow>
        {headers.map((header) => {
          if (['date', 'dept', 'rep'].indexOf(header) !== -1) {
            return (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive={header === sortColumn}
                  isAscending={sortAsc}
                  onClick={() => null}
                  text={header}
                />
              </StyledTableHeader>
            );
          }

          return (
            <StyledTableHeader key={header} scope="col">
              {header}
            </StyledTableHeader>
          );
        })}
      </StyledTableRow>
    </StyledTableHead>
    <StyledTableBody>
      {callsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </StyledTableBody>
  </StyledTable>
);

CallsList.propTypes = {
  callsData: T.arrayOf(
    T.shape({
      audio: T.string,
      date: T.string,
      dept: T.string,
      desc: T.string,
      id: T.string,
      rep: T.string,
      time: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
  sortAsc: T.bool,
  sortColumn: T.string.isRequired,
};

CallsList.defaultProps = {
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
  sortAsc: false,
};

export default CallsList;
