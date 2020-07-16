/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';

import { SidebarWrapper } from './styledComponents';

const Sidebar = ({ pathname, sidebarLoanSummaryData }) => (
  <SidebarWrapper>
    <SidebarHeader pathname={pathname} />
    <SidebarSummary
      data={sidebarLoanSummaryData}
      iconName="money"
      title="Loan"
    />
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pathname: T.string.isRequired,
  sidebarLoanSummaryData: T.array.isRequired,
};

export default Sidebar;
