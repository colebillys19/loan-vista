/**
 * Table
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import {
  StyledTableBody,
  StyledTableHead,
  StyledTableHeader,
} from 'components/_shared/ListTable';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListSkeleton from 'components/_shared/ListSkeleton';

import CustomTableRow from './CustomTableRow';
import { CustomTable, TableHeadRow } from './styledComponents';

const Table = ({ data, headers, mainError, useFallback }) => (
  <CustomTable>
    <StyledTableHead>
      <TableHeadRow>
        {headers.map((header) => (
          <StyledTableHeader key={header}>{header}</StyledTableHeader>
        ))}
      </TableHeadRow>
    </StyledTableHead>
    <StyledTableBody>
      <ConditionalRender
        Component={
          <Fragment>
            {data.map(({ id, ...restData }) => (
              <CustomTableRow key={id} data={restData} headers={headers} />
            ))}
          </Fragment>
        }
        FallbackComponent={
          <ListSkeleton isError={mainError} isTable numRows={5} />
        }
        shouldRender={!useFallback}
      />
    </StyledTableBody>
  </CustomTable>
);

Table.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  headers: T.arrayOf(T.string).isRequired,
  mainError: T.bool.isRequired,
  useFallback: T.bool.isRequired,
};

export default Table;
