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
  Row,
  SidebarSummaryContainer,
  StyledH5,
  SummaryTitleContainer,
} from './styledComponents';

const SidebarSummary = ({ data, health, title }) => (
  <SidebarSummaryContainer>
    <SummaryTitleContainer>
      <BulletIcon size="1.2rem" />
      <StyledH5>{title}</StyledH5>
    </SummaryTitleContainer>
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
  </SidebarSummaryContainer>
);

SidebarSummary.propTypes = {
  data: T.array.isRequired,
  health: T.number,
  title: T.string.isRequired,
};

export default SidebarSummary;
