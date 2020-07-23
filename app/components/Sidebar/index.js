/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_baseUI/ConditionalRender';

import SidebarContent from './SidebarContent';
import { pathnameIsValid } from './helpers';
import { SidebarWrapper } from './styledComponents';

const Sidebar = ({ pathname, sidebarHeaderData, sidebarSummaryData }) => (
  <SidebarWrapper>
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
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pathname: T.string.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummaryData: T.object.isRequired,
};

export default Sidebar;
