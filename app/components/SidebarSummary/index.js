/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import iconDictionary from 'utils/iconDictionary';
import { getHealthColor } from 'utils/globalHelpers';

import {
  Detail,
  DetailLabel,
  SidebarSummaryContainer,
  StyledH5,
  SummaryDetail,
  SummaryTitleWrapper,
} from './styledComponents';

const SidebarSummary = ({ data, health, title }) => {
  const Icon = iconDictionary('bullet', '1.2rem');

  return (
    <SidebarSummaryContainer>
      <SummaryTitleWrapper>
        {Icon}
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
};

SidebarSummary.propTypes = {
  data: T.array.isRequired,
  health: T.number,
  title: T.string.isRequired,
};

export default SidebarSummary;
