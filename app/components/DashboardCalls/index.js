/**
 * DashboardCalls
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import { appColorAOpaque, textColorA } from 'styleConstants';
import { CallIcon } from 'images/icons';
import { StyledTable, StyledTableBody } from 'components/_base-ui/ListTable';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import GradientCard from 'components/_base-ui/GradientCard';
import Skeleton from 'components/_base-ui/ListTable/Skeleton';
import ViewMoreBlock from 'components/_base-ui/ViewMoreBlock';

import { MOCK_DATA } from './tests/mockData';
import TableRow from './TableRow';

const Icon = (
  <CallIcon colorA={textColorA} colorB={appColorAOpaque} size="4rem" />
);

const DashboardCalls = ({ data, headers, renderLoading }) => (
  <GradientCard heading="Calls" Icon={Icon} reduceBottomPadding>
    <StyledTable>
      <StyledTableBody>
        <ConditionalRender
          Component={
            <Fragment>
              {data.map(({ id, ...restData }) => (
                <TableRow key={id} data={restData} headers={headers} />
              ))}
            </Fragment>
          }
          FallbackComponent={<Skeleton numRows={5} />}
          shouldRender={!renderLoading}
        />
      </StyledTableBody>
    </StyledTable>
    <ViewMoreBlock route="/calls" />
  </GradientCard>
);

DashboardCalls.propTypes = {
  data: T.array,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

DashboardCalls.defaultProps = {
  data: MOCK_DATA,
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
};

export default DashboardCalls;
