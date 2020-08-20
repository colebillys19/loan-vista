/**
 * CallsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListSortButton from 'components/_base-ui/ListSortButton';
import ListTable from 'components/_base-ui/ListTable';
import ListTableBody from 'components/_base-ui/ListTableBody';
import ListTableHead from 'components/_base-ui/ListTableHead';

import TableRow from './TableRow';
import { StyledTableHeader } from './styledComponents';

const CallsList = ({ callsData, headers }) => (
  <ListTable>
    <ListTableHead>
      <tr>
        {headers.map((header) => {
          if (['date', 'dept', 'rep'].indexOf(header) !== -1) {
            return (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive
                  isDescending
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
      </tr>
    </ListTableHead>
    <ListTableBody>
      {callsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </ListTableBody>
  </ListTable>
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
};

CallsList.defaultProps = {
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
};

export default CallsList;
