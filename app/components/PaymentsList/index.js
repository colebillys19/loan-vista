/**
 * PaymentsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListTable from 'components/_base-ui/ListTable';
import ListTableBody from 'components/_base-ui/ListTableBody';
import ListTableHead from 'components/_base-ui/ListTableHead';

import TableRow from './TableRow';
import { StyledTableHeader } from './styledComponents';

const PaymentsList = ({ paymentsData, headers }) => (
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
};

PaymentsList.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow', ''],
};

export default PaymentsList;
