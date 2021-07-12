/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListBorders from 'components/_shared/ListBorders';
import {
  StyledTable,
  StyledTableBody,
  TableContainer,
  TableFooter,
} from 'components/_shared/GradientListTable';

import SortHead from './SortHead';
import TableRow from './TableRow';

const PaymentsView = ({
  dispatchFetchPaymentsData,
  listHeaders,
  paymentsData,
  ...restProps
}) => (
  <TableContainer>
    <ListBorders />
    <StyledTable>
      <SortHead
        dispatchFetchPaymentsData={dispatchFetchPaymentsData}
        headers={listHeaders}
        {...restProps}
      />
      <StyledTableBody>
        {paymentsData.map(({ id, ...restData }) => (
          <TableRow key={id} data={restData} headers={listHeaders} />
        ))}
      </StyledTableBody>
      <TableFooter />
    </StyledTable>
  </TableContainer>
);

PaymentsView.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  paymentsData: T.arrayOf(T.object).isRequired,
};

export default PaymentsView;
