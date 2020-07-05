/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { SidebarWrapper } from './styledComponents';
import { getIcon, getString } from './helpers';

const Sidebar = ({ pathname }) => (
  <SidebarWrapper>
    <div style={{ marginBottom: '1rem' }}>Sidebar ({getString(pathname)})</div>
    <div>{getIcon(pathname, '10rem')}</div>
  </SidebarWrapper>
);

Sidebar.propTypes = { pathname: T.string.isRequired };

export default Sidebar;
