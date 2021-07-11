/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListBorders from 'components/_shared/ListBorders';
import ListSortButton from 'components/_shared/ListSortButton';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
  TableContainer,
  TableFooter,
} from 'components/_shared/GradientListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const PaymentsView = ({
  dispatchFetchPaymentsData,
  headers,
  lastSortCol,
  lastSortOrder,
  paymentsData,
  sortLoading,
}) => {
  const handleSortClick = (header) => {
    const newSortCol = header;
    const newSortOrder =
      header === lastSortCol && lastSortOrder === 'desc' ? 'asc' : 'desc';

    dispatchFetchPaymentsData(newSortCol, newSortOrder);
  };

  return (
    <TableContainer>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
          <StyledTableRow>
            {headers.map((header) => (
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
            ))}
            <StyledTableHeader scope="col" />
          </StyledTableRow>
        </CustomTableHead>
        <StyledTableBody>
          {paymentsData.map(({ id, ...restData }) => (
            <TableRow key={id} data={restData} headers={headers} />
          ))}
        </StyledTableBody>
        <TableFooter />
      </StyledTable>
    </TableContainer>
  );
};

PaymentsView.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  headers: T.arrayOf(T.string),
  lastSortCol: T.string.isRequired,
  lastSortOrder: T.string.isRequired,
  paymentsData: T.arrayOf(
    T.shape({
      date: T.string,
      desc: T.string,
      escrow: T.string,
      id: T.string,
      interest: T.string,
      principal: T.string,
      total: T.string,
    }),
  ).isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

PaymentsView.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};

export default PaymentsView;
