/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import iconDictionary from 'utils/iconDictionary';

import {
  DetailLabel,
  SidebarSummaryWrapper,
  StyledH5,
  SummaryDetail,
  SummaryTitleWrapper,
} from './styledComponents';

const SidebarSummary = ({ data, iconName, title }) => {
  const Icon = iconDictionary(iconName, '1.2rem');

  return (
    <SidebarSummaryWrapper>
      <SummaryTitleWrapper>
        {Icon}
        <StyledH5>{title}</StyledH5>
      </SummaryTitleWrapper>
      {data.map(({ label, value }) => (
        <SummaryDetail>
          <DetailLabel>{label}: </DetailLabel>
          <span>{value}</span>
        </SummaryDetail>
      ))}
    </SidebarSummaryWrapper>
  );
};

SidebarSummary.propTypes = {
  data: T.array.isRequired,
  iconName: T.string.isRequired,
  title: T.string.isRequired,
};

export default SidebarSummary;
