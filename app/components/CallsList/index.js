/**
 * CallsList
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ListBorders from 'components/_base-ui/ListBorders';
import ListSortButton from 'components/_base-ui/ListSortButton';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
  TableWrapper,
} from 'components/_base-ui/ListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const CallsList = ({
  callsData,
  dispatchFetchCallsData,
  headers,
  loading,
  sortValues: { sortCol, sortOrder },
}) => {
  const [colClicked, setColClicked] = useState('');

  useEffect(() => {
    setColClicked('');
  }, [sortCol, sortOrder]);

  const handleSortClick = (header) => {
    setColClicked(header);

    if (header !== sortCol) {
      dispatchFetchCallsData({ sortCol: header, sortOrder: 'desc' });
    } else {
      dispatchFetchCallsData({
        sortOrder: sortOrder === 'desc' ? 'asc' : 'desc',
      });
    }
  };

  return (
    <TableWrapper>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
          <StyledTableRow>
            {headers.map((header) => {
              if (['date', 'dept', 'rep'].indexOf(header) !== -1) {
                return (
                  <StyledTableHeader
                    key={header}
                    loading={loading && header === colClicked}
                    scope="col"
                  >
                    <ListSortButton
                      isActive={header === sortCol}
                      isAscending={header === sortCol && sortOrder === 'asc'}
                      loading={loading && header === colClicked}
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
        </CustomTableHead>
        <StyledTableBody>
          {callsData.map(({ id, ...restData }) => (
            <TableRow data={restData} headers={headers} key={id} />
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableWrapper>
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
  loading: T.bool.isRequired,
  sortValues: T.shape({ sortCol: T.string, sortOrder: T.string }).isRequired,
};

CallsList.defaultProps = {
  headers: ['date', 'time', 'dept', 'rep', 'desc', 'audio'],
};

export default CallsList;
