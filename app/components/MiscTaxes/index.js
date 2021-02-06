/**
 * MiscTaxes
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeader,
  TableRow,
} from 'components/_base-ui/ListTable';
import { appColorB } from 'styleConstants';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import GradientCard from 'components/_base-ui/GradientCard';
import ListSkeleton from 'components/_base-ui/ListSkeleton';
import NoDataBlock from 'components/_base-ui/NoDataBlock';

import { TableHeadRow } from './styledComponents';

const MiscTaxes = ({ data, headers, renderLoading }) => (
  <GradientCard color={appColorB} heading="Taxes">
    <ConditionalRender
      Component={<NoDataBlock />}
      shouldRender={!renderLoading && !data.length}
    />
    <StyledTable>
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
                <TableRow key={id} data={restData} headers={headers} />
              ))}
            </Fragment>
          }
          FallbackComponent={<ListSkeleton isTable numRows={5} />}
          shouldRender={!renderLoading}
        />
      </StyledTableBody>
    </StyledTable>
  </GradientCard>
);

MiscTaxes.propTypes = {
  data: T.array,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

MiscTaxes.defaultProps = {
  headers: ['Tax Type', 'Paid To', 'Tax ID', 'Next Due', 'Expected Amount'],
};

export default MiscTaxes;
