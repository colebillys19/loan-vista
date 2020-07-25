/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_baseUI/ConditionalRender';

import SidebarContent from './SidebarContent';
import { pathnameIsValid } from './helpers';
import { SidebarContainer } from './styledComponents';

const Sidebar = ({ pathname, sidebarHeaderData, sidebarSummaryData }) => (
  <SidebarContainer>
    <ConditionalRender
      Component={
        <SidebarContent
          pathname={pathname}
          sidebarHeaderData={sidebarHeaderData}
          sidebarSummaryData={sidebarSummaryData}
        />
      }
      shouldRender={pathnameIsValid(pathname)}
    />
  </SidebarContainer>
);

Sidebar.propTypes = {
  pathname: T.string.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummaryData: T.object.isRequired,
};

export default Sidebar;
