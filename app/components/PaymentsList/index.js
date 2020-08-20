/**
 * PaymentsList
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

const PaymentsList = ({ paymentsData, headers, sortAsc, sortColumn }) => (
  <ListTable>
    <ListTableHead>
      <tr>
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
      </tr>
    </ListTableHead>
    <ListTableBody>
      {paymentsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </ListTableBody>
  </ListTable>
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
