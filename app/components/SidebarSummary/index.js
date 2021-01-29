/**
 * SidebarSummary
 * @description ...
 */

import React, { Fragment } from 'react';
import T from 'prop-types';

import { BulletIcon } from 'images/icons';
import { getHealthColor } from 'utils/globalHelpers';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListSkeleton from 'components/_base-ui/ListSkeleton';

import {
  Detail,
  DetailLabel,
  Row,
  SidebarSummaryContainer,
  StyledH5,
  SummaryTitleContainer,
} from './styledComponents';

const SidebarSummary = ({ data, health, numRows, renderLoading, title }) => (
  <SidebarSummaryContainer>
    <SummaryTitleContainer>
      <BulletIcon size="1.2rem" />
      <StyledH5>{title}</StyledH5>
    </SummaryTitleContainer>
    <ConditionalRender
      Component={
        <Fragment>
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
        </Fragment>
      }
      FallbackComponent={<ListSkeleton numRows={numRows} />}
      shouldRender={!renderLoading}
    />
  </SidebarSummaryContainer>
);

SidebarSummary.propTypes = {
  data: T.arrayOf(
    T.shape({ label: T.string, value: T.oneOfType([T.number, T.string]) }),
  ).isRequired,
  health: T.number,
  numRows: T.number,
  renderLoading: T.bool.isRequired,
  title: T.string.isRequired,
};

export default SidebarSummary;
