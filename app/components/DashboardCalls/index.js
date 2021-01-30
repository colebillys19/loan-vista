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
import ListSkeleton from 'components/_base-ui/ListSkeleton';
import NoDataBlock from 'components/_base-ui/NoDataBlock';
import ViewMoreBlock from 'components/_base-ui/ViewMoreBlock';

import TableRow from './TableRow';

const Icon = (
  <CallIcon colorA={textColorA} colorB={appColorAOpaque} size="4rem" />
);

const DashboardCalls = ({ data, headers, renderLoading }) => (
  <GradientCard heading="Calls" Icon={Icon} reduceBottomPadding>
    <ConditionalRender
      Component={<NoDataBlock />}
      shouldRender={!renderLoading && !data.length}
    />
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
          FallbackComponent={<ListSkeleton isTable numRows={5} />}
          shouldRender={!renderLoading}
        />
      </StyledTableBody>
    </StyledTable>
    <ViewMoreBlock isActive={!renderLoading && !!data.length} route="/calls" />
  </GradientCard>
);

DashboardCalls.propTypes = {
  data: T.array,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

DashboardCalls.defaultProps = {
  headers: ['date', 'time', 'dept', 'desc', 'rep', 'audio'],
};

export default DashboardCalls;
