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

const CallsList = ({
  callsData,
  dispatchFetchCallsData,
  headers,
  sortValues: { sortCol, sortOrder },
}) => {
  const handleSortClick = (header) => {
    if (header !== sortCol) {
      dispatchFetchCallsData({ sortCol: header, sortOrder: 'desc' });
    } else {
      dispatchFetchCallsData({
        sort: { sortCol, sortOrder: sortOrder === 'desc' ? 'asc' : 'desc' },
      });
    }
  };

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          {headers.map((header) => {
            if (['date', 'dept', 'rep'].indexOf(header) !== -1) {
              return (
                <StyledTableHeader key={header} scope="col">
                  <ListSortButton
                    isActive={header === sortCol}
                    isAscending={header === sortCol && sortOrder === 'asc'}
                    onClick={() => handleSortClick(header)}
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
};

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
  dispatchFetchCallsData: T.func.isRequired,
  headers: T.arrayOf(T.string),
  sortValues: T.shape({ sortCol: T.string, sortOrder: T.string }).isRequired,
};

CallsList.defaultProps = {
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
};

export default CallsList;
