/**
 * DashboardCalls
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { appColorAOpaque, textColorA } from 'styleConstants';
import { CallIcon } from 'images/icons';
import { StyledTable, StyledTableBody } from 'components/_base-ui/ListTable';
import GradientCard from 'components/_base-ui/GradientCard';
import ViewMoreBlock from 'components/_base-ui/ViewMoreBlock';

import { MOCK_DATA } from './tests/mockData';
import TableRow from './TableRow';

const Icon = (
  <CallIcon colorA={textColorA} colorB={appColorAOpaque} size="4rem" />
);

const DashboardCalls = ({ data, headers }) => (
  <GradientCard heading="Calls" Icon={Icon} reduceBottomPadding>
    <StyledTable>
      <StyledTableBody>
        {data.map(({ id, ...restData }) => (
          <TableRow key={id} data={restData} headers={headers} />
        ))}
      </StyledTableBody>
    </StyledTable>
    <ViewMoreBlock route="/calls" />
  </GradientCard>
);

DashboardCalls.propTypes = { data: T.array, headers: T.array };

DashboardCalls.defaultProps = {
  data: MOCK_DATA,
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
};

export default DashboardCalls;
