/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { getIcon, getTabName } from './helpers';
import {
  IconWrapper,
  SidebarDetail,
  SidebarHeaderWrapper,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({
  pathname,
  sidebarHeaderData: {
    address1,
    address2,
    // health,
    loanNumber,
    name,
    status,
  },
}) => {
  const heading = pathname === '/' ? loanNumber : getTabName(pathname);

  return (
    <SidebarHeaderWrapper>
      <IconWrapper>{getIcon(pathname, '10rem')}</IconWrapper>
      <StyledH1>{heading}</StyledH1>
      <SidebarDetail>{name}</SidebarDetail>
      <SidebarDetail>{address1}</SidebarDetail>
      <SidebarDetail>{address2}</SidebarDetail>
      <SidebarDetail>Status: {status}</SidebarDetail>
    </SidebarHeaderWrapper>
  );
};

SidebarHeader.propTypes = {
  pathname: T.string.isRequired,
  sidebarHeaderData: T.shape({
    address1: T.string,
    address2: T.string,
    health: T.number,
    loanNumber: T.string,
    name: T.string,
    status: T.string,
  }).isRequired,
};

export default SidebarHeader;
