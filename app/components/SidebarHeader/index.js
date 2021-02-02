/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { isValidRoute } from 'utils/globalHelpers';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import { getIcon, getTabName } from './helpers';
import FallbackBlock from './FallbackBlock';
import {
  IconContainer,
  SidebarDetail,
  SidebarDetailsContainer,
  SidebarHeaderContainer,
  StyledButton,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({
  error,
  pathname,
  renderLoading,
  sidebarHeaderData: { addressA, addressB, loanNumber, name },
}) => {
  const isDashboard = pathname === '/';
  const headingText = isDashboard ? loanNumber : getTabName(pathname);

  return (
    <SidebarHeaderContainer>
      <IconContainer>{getIcon(pathname, '8rem')}</IconContainer>
      <ConditionalRender
        // div used instead of fragment to ensure skeleton height consistency
        Component={
          <SidebarDetailsContainer>
            <StyledH1>{headingText}</StyledH1>
            <SidebarDetail>{name}</SidebarDetail>
            <SidebarDetail>{addressA}</SidebarDetail>
            <SidebarDetail>{addressB}</SidebarDetail>
          </SidebarDetailsContainer>
        }
        FallbackComponent={
          <FallbackBlock error={error} hideIcon={!isValidRoute(pathname)} />
        }
        shouldRender={!renderLoading}
      />
      <StyledButton
        isGhost={renderLoading}
        onClick={() => null}
        text="Switch Loan"
      />
    </SidebarHeaderContainer>
  );
};

SidebarHeader.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  pathname: T.string.isRequired,
  renderLoading: T.bool.isRequired,
  sidebarHeaderData: T.shape({
    addressA: T.string,
    addressB: T.string,
    health: T.number,
    loanNumber: T.string,
    name: T.string,
  }).isRequired,
};

export default SidebarHeader;
