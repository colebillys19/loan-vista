/**
 * CallsView
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

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  listHeaders,
  nextPageToFetch,
  scrollLoading,
  ...restProps
}) => (
  <InfiniteScroll
    data={callsData}
    dispatchFetchData={dispatchFetchCallsData}
    nextPageToFetch={nextPageToFetch}
    render={() => (
      <TableContainer>
        <ListBorders />
        <StyledTable>
          <SortHead
            dispatchFetchCallsData={dispatchFetchCallsData}
            headers={listHeaders}
            {...restProps}
          />
          <StyledTableBody>
            {callsData.map(({ id, ...restData }) => (
              <TableRow key={id} data={restData} headers={listHeaders} />
            ))}
          </StyledTableBody>
          <ConditionalRender
            Component={ScrollLoader}
            propsToPassDown={{ isEven: callsData.length % 2 === 0 }}
            shouldRender={scrollLoading}
          />
          <TableFooter />
        </StyledTable>
      </TableContainer>
    )}
    scrollLoading={scrollLoading}
  />
);

CallsView.propTypes = {
  callsData: T.arrayOf(T.objectOf(T.string)).isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  nextPageToFetch: T.number.isRequired,
  scrollLoading: T.bool.isRequired,
};

export default CallsView;
