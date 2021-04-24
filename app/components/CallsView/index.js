/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListBorders from 'components/_base-ui/ListBorders';
import ListSortButton from 'components/_base-ui/ListSortButton';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
  TableContainer,
  TableFooter,
} from 'components/_base-ui/GradientListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  headers,
  lastSortCol,
  lastSortOrder,
  sortLoading,
}) => {
  const handleSortClick = (header) => {
    const newSortCol = header;
    const newSortOrder =
      header === lastSortCol && lastSortOrder === 'desc' ? 'asc' : 'desc';

    dispatchFetchCallsData(newSortCol, newSortOrder);
  };

  return (
    <TableContainer>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
          <StyledTableRow>
            {headers.map((header) => {
              if (['date', 'dept', 'rep'].includes(header)) {
                return (
                  <StyledTableHeader key={header} scope="col">
                    <ListSortButton
                      isActive={header === lastSortCol}
                      isAscending={
                        header === lastSortCol && lastSortOrder === 'asc'
                      }
                      loading={sortLoading === header}
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
            <TableRow key={id} data={restData} headers={headers} />
          ))}
        </StyledTableBody>
        <TableFooter />
      </StyledTable>
    </TableContainer>
  );
};

CallsView.propTypes = {
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
  lastSortCol: T.string.isRequired,
  lastSortOrder: T.string.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

CallsView.defaultProps = {
  headers: ['date', 'time', 'dept', 'rep', 'desc', 'audio'],
};

export default CallsView;
