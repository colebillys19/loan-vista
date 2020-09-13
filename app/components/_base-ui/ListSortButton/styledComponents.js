import React from 'react';
import styled from 'styled-components';

import LinkButton from 'components/_base-ui/LinkButton';
import { appColorA, textColorB } from 'styleConstants';

export const ButtonContainer = styled.span``;

export const IconWrapper = styled.span`
  padding-left: 0.6rem;
`;

export const StyledLinkButton = styled(({ isActive, ...restProps }) => (
  <LinkButton {...restProps} />
))`
  color: ${({ isActive }) => (isActive ? appColorA : textColorB)};
  text-transform: uppercase;
`;
