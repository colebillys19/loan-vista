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
  SidebarHeaderContainer,
  StyledButton,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({
  pathname,
  sidebarHeaderData: { address1, address2, loanNumber, name },
}) => {
  const isHome = pathname === '/';
  const headingText = isHome ? loanNumber : getTabName(pathname);

  return (
    <SidebarHeaderContainer>
      <IconWrapper>{getIcon(pathname, '8rem')}</IconWrapper>
      <StyledH1>{loanNumber.length ? headingText : '-'}</StyledH1>
      <SidebarDetail>{name}</SidebarDetail>
      <SidebarDetail>{address1}</SidebarDetail>
      <SidebarDetail>{address2}</SidebarDetail>
      <StyledButton onClick={() => null} text="Switch Loan" />
    </SidebarHeaderContainer>
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
  }).isRequired,
};

export default SidebarHeader;
