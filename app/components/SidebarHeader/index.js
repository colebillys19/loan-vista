/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';

import { getIcon, getTabName } from './helpers';
import SpinnerBlock from './SpinnerBlock';
import {
  IconContainer,
  SidebarDetail,
  SidebarHeaderContainer,
  StyledButton,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({
  pathname,
  renderLoading,
  sidebarHeaderData: { address1, address2, loanNumber, name },
}) => {
  const isDashboard = pathname === '/';
  const headingText = isDashboard ? loanNumber : getTabName(pathname);

  return (
    <SidebarHeaderContainer>
      <IconContainer>{getIcon(pathname, '8rem')}</IconContainer>
      <ConditionalRender
        // div used instead of fragment to ensure skeleton height consistency
        Component={
          <div>
            <StyledH1>{headingText}</StyledH1>
            <SidebarDetail>{name}</SidebarDetail>
            <SidebarDetail>{address1}</SidebarDetail>
            <SidebarDetail>{address2}</SidebarDetail>
          </div>
        }
        FallbackComponent={<SpinnerBlock />}
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
  pathname: T.string.isRequired,
  renderLoading: T.bool.isRequired,
  sidebarHeaderData: T.shape({
    address1: T.string,
    address2: T.string,
    health: T.number,
    loanNumber: T.string,
    name: T.string,
  }).isRequired,
};

export default SidebarHeader;
