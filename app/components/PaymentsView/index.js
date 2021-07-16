/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_shared/ConditionalRender';
import {
  StyledTable,
  StyledTableBody,
  TableContainer,
  TableFooter,
} from 'components/_shared/GradientListTable';
import InfiniteScroll from 'components/_shared/InfiniteScroll';
import ListBorders from 'components/_shared/ListBorders';
import ScrollLoader from 'components/_shared/ScrollLoader';

import SortHead from './SortHead';
import TableRow from './TableRow';

const PaymentsView = ({
  dispatchFetchPaymentsData,
  listHeaders,
  nextPageToFetch,
  paymentsData,
  scrollLoading,
  ...restProps
}) => (
  <InfiniteScroll
    data={paymentsData}
    dispatchFetchData={dispatchFetchPaymentsData}
    nextPageToFetch={nextPageToFetch}
    render={() => (
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
          <ConditionalRender
            Component={ScrollLoader}
            propsToPassDown={{ numCells: listHeaders.length + 1 }}
            shouldRender={scrollLoading}
          />
          <TableFooter />
        </StyledTable>
      </TableContainer>
    )}
    scrollLoading={scrollLoading}
  />
);

PaymentsView.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  nextPageToFetch: T.number.isRequired,
  paymentsData: T.arrayOf(T.object).isRequired,
  scrollLoading: T.bool.isRequired,
};

export default PaymentsView;
