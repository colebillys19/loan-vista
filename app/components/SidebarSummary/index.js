/**
 * SidebarSummary
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import iconDictionary from 'utils/iconDictionary';

import { IconWrapper, SidebarSummaryWrapper, StyledH5 } from './styledComponents';

const SidebarSummary = ({ data, iconName, title }) => {
  const Icon = iconDictionary(iconName, '3rem');

  return (
    <SidebarSummaryWrapper>
      <StyledH5>{title}</StyledH5>
      <IconWrapper>{Icon}</IconWrapper>
      {data.map(({ label, value }) => (
        <div>
          <span>{label}: </span>
          <span>{value}</span>
        </div>
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
