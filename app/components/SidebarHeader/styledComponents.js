import React from 'react';
import styled from 'styled-components';

import Button from 'components/_base-ui/Button';

export const IconContainer = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SidebarDetail = styled.span`
  display: block;
  text-align: center;
  & :not(:last-of-type) {
    margin-bottom: 0.3rem;
  }
`;

export const SidebarDetailsContainer = styled.div`
  height: 9.4rem;
`;

export const SidebarHeaderContainer = styled.section`
  margin-bottom: 4rem;
  width: 100%;
`;

export const SpinnerBlockContainer = styled.div`
  height: 9.4rem;
  padding-top: 2.1rem;
  text-align: center;
`;

export const StyledButton = styled(({ isGhost, ...restProps }) => (
  <Button {...restProps} />
))`
  display: block;
  margin: 1.6rem auto 0;
  opacity: ${({ isGhost }) => (isGhost ? '0.5' : '1')};
  pointer-events: ${({ isGhost }) => (isGhost ? 'none' : 'all')};
  & span {
    opacity: ${({ isGhost }) => (isGhost ? '0' : '1')};
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  margin: 0 0 1.1rem;
  text-align: center;
`;
