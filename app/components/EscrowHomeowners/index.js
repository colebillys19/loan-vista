/**
 * EscrowTaxes
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
} from 'components/_shared/ListTable';
import { appColorB } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import ListSkeleton from 'components/_shared/ListSkeleton';
import NoDataBlock from 'components/_shared/NoDataBlock';

import { TableHeadRow } from './styledComponents';

const EscrowTaxes = ({ data, headers, renderLoading }) => (
  <GradientCard color={appColorB} heading="Homeowner's/Hazard Insurance">
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

EscrowTaxes.propTypes = {
  data: T.array,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

EscrowTaxes.defaultProps = {
  headers: [
    'Insurance Type',
    'Policy Type',
    'Company',
    'Policy Expiration',
    'Annual Premium',
  ],
};

export default EscrowTaxes;
