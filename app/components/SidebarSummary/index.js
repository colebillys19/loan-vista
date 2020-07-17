/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import iconDictionary from 'utils/iconDictionary';

import {
  SidebarSummaryWrapper,
  StyledH5,
  SummaryDetail,
  SummaryTitleWrapper,
} from './styledComponents';

const SidebarSummary = ({ data, iconName, title }) => {
  const Icon = iconDictionary(iconName, '2.5rem');

  return (
    <SidebarSummaryWrapper>
      <SummaryTitleWrapper>
        {Icon}
        <StyledH5>{title}</StyledH5>
      </SummaryTitleWrapper>
      {data.map(({ label, value }) => (
        <SummaryDetail>
          <span>{label}: </span>
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
