/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { ROUTES_DICT } from './constants';
import { SidebarWrapper } from './styledComponents';

const Sidebar = ({ pathname }) => (
  <SidebarWrapper>Sidebar ({ROUTES_DICT[pathname]})</SidebarWrapper>
);

Sidebar.propTypes = { pathname: T.string.isRequired };

export default Sidebar;
