/**
 * SidebarHeader
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { getIcon, getTabName } from './helpers';
import {
  IconWrapper,
  SidebarHeaderWrapper,
  StyledH1,
} from './styledComponents';

const SidebarHeader = ({ pathname }) => (
  <SidebarHeaderWrapper>
    <IconWrapper>{getIcon(pathname, '10rem')}</IconWrapper>
    <StyledH1>{getTabName(pathname)}</StyledH1>
  </SidebarHeaderWrapper>
);

SidebarHeader.propTypes = { pathname: T.string.isRequired };

export default SidebarHeader;
