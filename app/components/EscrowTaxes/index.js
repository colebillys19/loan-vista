/**
 * EscrowTaxes
 * @description ...
 */

import React, { Fragment, useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
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

const EscrowTaxes = ({ data, headers }) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;

  return (
    <GradientCard color={appColorB} heading="Taxes">
      <ConditionalRender
        Component={<NoDataBlock />}
        shouldRender={!useFallback && !data.length}
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
            FallbackComponent={
              <ListSkeleton isError={mainError} isTable numRows={5} />
            }
            shouldRender={!useFallback}
          />
        </StyledTableBody>
      </StyledTable>
    </GradientCard>
  );
};

EscrowTaxes.propTypes = { data: T.array, headers: T.array };

EscrowTaxes.defaultProps = {
  headers: ['Tax Type', 'Paid To', 'Tax ID', 'Next Due', 'Expected Amount'],
};

export default EscrowTaxes;
