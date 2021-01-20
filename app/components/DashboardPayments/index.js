/**
 * DashboardPayments
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { appColorAOpaque, textColorA } from 'styleConstants';
import { CashIcon } from 'images/icons';
import { StyledTable, StyledTableBody } from 'components/_base-ui/ListTable';
import GradientCard from 'components/_base-ui/GradientCard';
import ViewMoreBlock from 'components/_base-ui/ViewMoreBlock';

import { MOCK_DATA } from './tests/mockData';
import TableRow from './TableRow';

const Icon = (
  <CashIcon colorA={textColorA} colorB={appColorAOpaque} size="4rem" />
);

const DashboardPayments = ({ data, headers }) => (
  <GradientCard heading="Payments" Icon={Icon} reduceBottomPadding>
    <StyledTable>
      <StyledTableBody>
        {data.map(({ id, ...restData }) => (
          <TableRow key={id} data={restData} headers={headers} />
        ))}
      </StyledTableBody>
    </StyledTable>
    <ViewMoreBlock route="/payments" />
  </GradientCard>
);

DashboardPayments.propTypes = { data: T.array, headers: T.array };

DashboardPayments.defaultProps = {
  data: MOCK_DATA,
  headers: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};

export default DashboardPayments;
