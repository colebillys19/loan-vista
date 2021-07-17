/**
 * Table
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeader,
} from 'components/_shared/ListTable';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListSkeleton from 'components/_shared/ListSkeleton';

import CustomTableRow from './CustomTableRow';
import { TableHeadRow } from './styledComponents';

const Table = ({
  data,
  formattedHeaders,
  listHeaders,
  mainError,
  useFallback,
}) => (
  <StyledTable>
    <StyledTableHead>
      <TableHeadRow>
        {formattedHeaders.map((header) => (
          <StyledTableHeader key={header}>{header}</StyledTableHeader>
        ))}
      </TableHeadRow>
    </StyledTableHead>
    <StyledTableBody>
      <ConditionalRender
        Component={
          <Fragment>
            {data.map(({ id, ...restData }) => (
              <CustomTableRow key={id} data={restData} headers={listHeaders} />
            ))}
          </Fragment>
        }
        FallbackComponent={
          <ListSkeleton isError={mainError} isTable numRows={5} />
        }
        shouldRender={!useFallback}
      />
    </StyledTableBody>
  </StyledTable>
);

Table.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  formattedHeaders: T.arrayOf(T.string).isRequired,
  listHeaders: T.arrayOf(T.string).isRequired,
  mainError: T.bool.isRequired,
  useFallback: T.bool.isRequired,
};

export default Table;
