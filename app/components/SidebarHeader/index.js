/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import BulletIcon from 'utils/svg/BulletIcon';
import { getHealthColor } from 'utils/globalHelpers';
import ConditionalRender from 'components/_baseUI/ConditionalRender';

import { getIcon, getTabName } from './helpers';
import {
  HeadingContainer,
  IconWrapper,
  SidebarDetail,
  SidebarHeaderContainer,
  StyledButton,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({
  pathname,
  sidebarHeaderData: { address1, address2, health, loanNumber, name },
}) => {
  const isHome = pathname === '/';

  return (
    <SidebarHeaderContainer>
      <IconWrapper>{getIcon(pathname, '8rem')}</IconWrapper>
      <HeadingContainer>
        <StyledH1>{isHome ? loanNumber : getTabName(pathname)}</StyledH1>
        <ConditionalRender
          Component={
            <BulletIcon color={getHealthColor(health)} size="2.5rem" />
          }
          shouldRender={isHome}
        />
      </HeadingContainer>
      <SidebarDetail>{name}</SidebarDetail>
      <SidebarDetail>{address1}</SidebarDetail>
      <SidebarDetail>{address2}</SidebarDetail>
      <StyledButton variant="contained">Switch Loan</StyledButton>
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
