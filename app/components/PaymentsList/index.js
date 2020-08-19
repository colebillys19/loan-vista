/**
 * PaymentsList
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

const PaymentsList = ({ paymentsData, headers }) => (
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
      {paymentsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </tbody>
  </StyledTable>
);

PaymentsList.propTypes = {
  paymentsData: T.arrayOf(
    T.shape({
      date: T.string,
      desc: T.string,
      escrow: T.string,
      id: T.number,
      interest: T.string,
      principal: T.string,
      total: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
};

PaymentsList.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};

export default PaymentsList;
