/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';

import { SidebarWrapper } from './styledComponents';

const Sidebar = ({ pathname }) => (
  <SidebarWrapper>
    <SidebarHeader pathname={pathname} />
  </SidebarWrapper>
);

Sidebar.propTypes = { pathname: T.string.isRequired };

export default Sidebar;
