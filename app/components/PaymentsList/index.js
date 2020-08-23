/**
 * PaymentsList
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

const PaymentsList = ({ paymentsData, headers, sortAsc, sortColumn }) => (
  <StyledTable>
    <StyledTableHead>
      <StyledTableRow>
        {headers.map((header) => (
          <StyledTableHeader key={header} scope="col">
            <ListSortButton
              isActive={header === sortColumn}
              isAscending={sortAsc}
              onClick={() => null}
              text={header}
            />
          </StyledTableHeader>
        ))}
      </StyledTableRow>
    </StyledTableHead>
    <StyledTableBody>
      {paymentsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </StyledTableBody>
  </StyledTable>
);

PaymentsList.propTypes = {
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
  headers: T.arrayOf(T.string),
  sortAsc: T.bool,
  sortColumn: T.string.isRequired,
};

PaymentsList.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
  sortAsc: false,
};

export default PaymentsList;
