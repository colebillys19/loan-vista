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
  StyledTableRow,
  TableRow,
} from 'components/_base-ui/ListTable';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import GradientCard from 'components/_base-ui/GradientCard';
import ListSkeleton from 'components/_base-ui/ListSkeleton';
import NoDataBlock from 'components/_base-ui/NoDataBlock';

import { MOCK_DATA } from './tests/mockData';

const MiscTaxes = ({ data, headers, renderLoading }) => (
  <GradientCard heading="Mortgage Insurance">
    <ConditionalRender
      Component={<NoDataBlock />}
      shouldRender={!renderLoading && !data.length}
    />
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          {headers.map((header) => (
            <StyledTableHeader key={header}>{header}</StyledTableHeader>
          ))}
        </StyledTableRow>
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
  data: MOCK_DATA,
  headers: ['company', 'insuranceId', 'premiumAmount', 'premiumDue'],
};

export default MiscTaxes;
