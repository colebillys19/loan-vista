/**
 * SidebarHeader
 * @description ...
 */

import React, { useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { isValidRoute } from 'utils/globalHelpers';
import ConditionalRender from 'components/_shared/ConditionalRender';

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
  pathname,
  sidebarHeaderData: { addressA, addressB, loanNumber, name },
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);

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
          <FallbackBlock
            hideIcon={!isValidRoute(pathname)}
            isError={mainError}
          />
        }
        shouldRender={!mainLoading && !mainError}
      />
      <StyledButton
        isGhost={mainLoading || mainError}
        onClick={() => null}
        text="Switch Loan"
      />
    </SidebarHeaderContainer>
  );
};

SidebarHeader.propTypes = {
  pathname: T.string.isRequired,
  sidebarHeaderData: T.shape({
    addressA: T.string,
    addressB: T.string,
    loanNumber: T.string,
    name: T.string,
  }).isRequired,
};

export default SidebarHeader;
