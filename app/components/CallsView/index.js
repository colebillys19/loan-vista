/**
 * CallsView
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

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  listHeaders,
  ...restProps
}) => (
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
      <TableFooter />
    </StyledTable>
  </TableContainer>
);

CallsView.propTypes = {
  callsData: T.arrayOf(T.objectOf(T.string)).isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
};

export default CallsView;
