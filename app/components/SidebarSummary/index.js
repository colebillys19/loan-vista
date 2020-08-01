/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import iconDictionary from 'utils/iconDictionary';

import {
  DetailLabel,
  SidebarSummaryContainer,
  StyledH5,
  SummaryDetail,
  SummaryTitleWrapper,
} from './styledComponents';

const SidebarSummary = ({ data, title }) => {
  const Icon = iconDictionary('bullet', '1.2rem');

  return (
    <SidebarSummaryContainer>
      <SummaryTitleWrapper>
        {Icon}
        <StyledH5>{title}</StyledH5>
      </SummaryTitleWrapper>
      {data.map(({ label, value }) => (
        <SummaryDetail key={label}>
          <DetailLabel>{label}: </DetailLabel>
          <span>{value}</span>
        </SummaryDetail>
      ))}
    </SidebarSummaryContainer>
  );
};

SidebarSummary.propTypes = {
  data: T.array.isRequired,
  title: T.string.isRequired,
};

export default SidebarSummary;
