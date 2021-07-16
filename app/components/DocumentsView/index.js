/**
 * DocumentsView
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

const DocumentsView = ({
  dispatchFetchDocumentsData,
  documentsData,
  listHeaders,
  nextPageToFetch,
  scrollLoading,
  ...restProps
}) => (
  <InfiniteScroll
    data={documentsData}
    dispatchFetchData={dispatchFetchDocumentsData}
    nextPageToFetch={nextPageToFetch}
    render={() => (
      <TableContainer>
        <ListBorders />
        <StyledTable>
          <SortHead
            dispatchFetchDocumentsData={dispatchFetchDocumentsData}
            headers={listHeaders}
            {...restProps}
          />
          <StyledTableBody>
            {documentsData.map(({ id, ...restData }) => (
              <TableRow key={id} data={restData} headers={listHeaders} />
            ))}
          </StyledTableBody>
          <ConditionalRender
            Component={ScrollLoader}
            propsToPassDown={{ numCells: listHeaders.length }}
            shouldRender={scrollLoading}
          />
          <TableFooter />
        </StyledTable>
      </TableContainer>
    )}
    scrollLoading={scrollLoading}
  />
);

DocumentsView.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  documentsData: T.arrayOf(T.objectOf(T.string)).isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  nextPageToFetch: T.number.isRequired,
  scrollLoading: T.bool.isRequired,
};

export default DocumentsView;
