/**
 * PaymentsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import {
  ListBodySpinner,
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
} from 'components/_base-ui/ListTable';
import ListSortButton from 'components/_base-ui/ListSortButton';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const PaymentsList = ({
  paymentsData,
  headers,
  loading,
  // sortAsc,
  // sortColumn,
}) => (
  <StyledTable>
    <CustomTableHead>
      <StyledTableRow>
        {headers.map((header) => (
          <StyledTableHeader key={header} scope="col">
            <ListSortButton
              isActive={false}
              isAscending={false}
              onClick={() => null}
              text={header}
            />
          </StyledTableHeader>
        ))}
      </StyledTableRow>
    </CustomTableHead>
    <ConditionalRender
      Component={
        <StyledTableBody>
          {paymentsData.map(({ id, ...restData }) => (
            <TableRow data={restData} headers={headers} key={id} />
          ))}
        </StyledTableBody>
      }
      FallbackComponent={<ListBodySpinner />}
      shouldRender={!loading}
    />
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
  loading: T.bool.isRequired,
  // sortAsc: T.bool,
  // sortColumn: T.string.isRequired,
};

PaymentsList.defaultProps = {
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
  // sortAsc: false,
};

export default PaymentsList;
