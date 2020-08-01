/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_baseUI/ConditionalRender';

import { getIcon, getTabName, getHealthColor } from './helpers';
import {
  DetailLabel,
  IconWrapper,
  SidebarDetail,
  SidebarHeaderContainer,
  StatusWrapper,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({
  pathname,
  sidebarHeaderData: { address1, address2, health, loanNumber, name, status },
}) => (
  <SidebarHeaderContainer>
    <IconWrapper>{getIcon(pathname, '8rem')}</IconWrapper>
    <StyledH1>{pathname === '/' ? loanNumber : getTabName(pathname)}</StyledH1>
    <SidebarDetail>{name}</SidebarDetail>
    <SidebarDetail>{address1}</SidebarDetail>
    <SidebarDetail>{address2}</SidebarDetail>
    <ConditionalRender
      Component={
        <SidebarDetail>
          <DetailLabel>Loan Number: </DetailLabel>
          {loanNumber}
        </SidebarDetail>
      }
      shouldRender={pathname !== '/'}
    />
    <SidebarDetail>
      <DetailLabel>Status: </DetailLabel>
      <StatusWrapper color={getHealthColor(health)}>{status}</StatusWrapper>
    </SidebarDetail>
  </SidebarHeaderContainer>
);

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
