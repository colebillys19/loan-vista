/**
 * DocumentsView
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

const DocumentsView = ({
  dispatchFetchDocumentsData,
  documentsData,
  listHeaders,
  ...restProps
}) => (
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
      <TableFooter />
    </StyledTable>
  </TableContainer>
);

DocumentsView.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  documentsData: T.arrayOf(T.objectOf(T.string)).isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
};

export default DocumentsView;
