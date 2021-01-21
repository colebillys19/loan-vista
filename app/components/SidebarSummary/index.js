/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { getHealthColor } from 'utils/globalHelpers';
import { BulletIcon } from 'images/icons';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import {
  Detail,
  DetailLabel,
  Row,
  SidebarSummaryContainer,
  Skeleton,
  StyledH5,
  SummaryDetails,
  SummaryTitleContainer,
} from './styledComponents';

const SidebarSummary = ({
  data,
  health,
  renderLoading,
  skeletonHeight,
  title,
}) => (
  <SidebarSummaryContainer>
    <SummaryTitleContainer>
      <BulletIcon size="1.2rem" />
      <StyledH5>{title}</StyledH5>
    </SummaryTitleContainer>
    <ConditionalRender
      Component={
        <SummaryDetails>
          {data.map(({ label, value }) => {
            const statusHealthColor =
              label === 'Status' ? getHealthColor(health) : null;

            return (
              <Row key={label}>
                <DetailLabel>{label}: </DetailLabel>
                <Detail color={statusHealthColor}>{value}</Detail>
              </Row>
            );
          })}
        </SummaryDetails>
      }
      FallbackComponent={<Skeleton height={skeletonHeight} />}
      shouldRender={!renderLoading}
    />
  </SidebarSummaryContainer>
);

SidebarSummary.propTypes = {
  data: T.array.isRequired,
  health: T.number,
  renderLoading: T.bool.isRequired,
  skeletonHeight: T.string.isRequired,
  title: T.string.isRequired,
};

export default SidebarSummary;
