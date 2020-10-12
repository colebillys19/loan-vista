/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import { getHealthColor } from 'utils/globalHelpers';
import { BulletIcon } from 'images/icons';

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
  const headingText = isHome ? loanNumber : getTabName(pathname);

  return (
    <SidebarHeaderContainer>
      <IconWrapper>{getIcon(pathname, '8rem')}</IconWrapper>
      <HeadingContainer>
        <StyledH1>{loanNumber.length ? headingText : '-'}</StyledH1>
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
