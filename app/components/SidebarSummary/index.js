/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { getHealthColor } from 'utils/globalHelpers';
import { BulletIcon } from 'images/icons';

import {
  Detail,
  DetailLabel,
  SidebarSummaryContainer,
  StyledH5,
  SummaryDetail,
  SummaryTitleWrapper,
} from './styledComponents';

const SidebarSummary = ({ data, health, title }) => (
  <SidebarSummaryContainer>
    <SummaryTitleWrapper>
      <BulletIcon size="1.2rem" />
      <StyledH5>{title}</StyledH5>
    </SummaryTitleWrapper>
    {data.map(({ label, value }) => {
      const statusHealthColor =
        label === 'Status' ? getHealthColor(health) : null;

      return (
        <SummaryDetail key={label}>
          <DetailLabel>{label}: </DetailLabel>
          <Detail color={statusHealthColor}>{value}</Detail>
        </SummaryDetail>
      );
    })}
  </SidebarSummaryContainer>
);

SidebarSummary.propTypes = {
  data: T.array.isRequired,
  health: T.number,
  title: T.string.isRequired,
};

export default SidebarSummary;
