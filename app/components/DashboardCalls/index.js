/**
 * DashboardCalls
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import { CallIcon } from 'images/iconComponents';
import { StyledTable, StyledTableBody } from 'components/_shared/ListTable';
import { appColorB, iconColorB, textColorA } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import ListSkeleton from 'components/_shared/ListSkeleton';
import NoDataBlock from 'components/_shared/NoDataBlock';
import ViewMoreBlock from 'components/_shared/ViewMoreBlock';

import CustomTableRow from './CustomTableRow';

const Icon = <CallIcon colorA={iconColorB} colorB={textColorA} size="4rem" />;

const DashboardCalls = ({
  data,
  dispatchNavigation,
  headers,
  renderLoading,
}) => (
  <GradientCard
    color={appColorB}
    heading="Calls"
    Icon={Icon}
    reduceBottomPadding
  >
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
                <CustomTableRow key={id} data={restData} headers={headers} />
              ))}
            </Fragment>
          }
          FallbackComponent={<ListSkeleton isTable numRows={5} />}
          shouldRender={!renderLoading}
        />
      </StyledTableBody>
    </StyledTable>
    <ViewMoreBlock
      isActive={!renderLoading && !!data.length}
      navigate={() => dispatchNavigation('/calls')}
    />
  </GradientCard>
);

DashboardCalls.propTypes = {
  data: T.array,
  dispatchNavigation: T.func.isRequired,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

DashboardCalls.defaultProps = {
  headers: ['date', 'time', 'dept', 'rep', 'desc', 'audio'],
};

export default DashboardCalls;
