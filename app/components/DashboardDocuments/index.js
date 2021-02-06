/**
 * DashboardDocuments
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import { appColorA, appColorB, textColorA } from 'styleConstants';
import { MailIcon } from 'images/icons';
import { StyledTable, StyledTableBody } from 'components/_base-ui/ListTable';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import GradientCard from 'components/_base-ui/GradientCard';
import ListSkeleton from 'components/_base-ui/ListSkeleton';
import NoDataBlock from 'components/_base-ui/NoDataBlock';
import ViewMoreBlock from 'components/_base-ui/ViewMoreBlock';

import CustomTableRow from './CustomTableRow';

const Icon = <MailIcon colorA={textColorA} colorB={appColorA} size="4rem" />;

const DashboardDocuments = ({
  data,
  dispatchNavigation,
  headers,
  renderLoading,
}) => (
  <GradientCard
    color={appColorB}
    heading="Documents"
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
      navigate={() => dispatchNavigation('/documents')}
    />
  </GradientCard>
);

DashboardDocuments.propTypes = {
  data: T.array,
  dispatchNavigation: T.func.isRequired,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

DashboardDocuments.defaultProps = {
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
};

export default DashboardDocuments;
