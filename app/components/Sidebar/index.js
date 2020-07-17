/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';

import { SidebarWrapper } from './styledComponents';

const Sidebar = ({
  pathname,
  sidebarSummaryData: {
    callsSummaryData,
    loanSummaryData,
    paymentSummaryData,
    serviceSummaryData,
  },
}) => (
  <SidebarWrapper>
    <SidebarHeader pathname={pathname} />
    <SidebarSummary data={loanSummaryData} iconName="note" title="Loan" />
    <SidebarSummary data={paymentSummaryData} iconName="coin" title="Payment" />
    <SidebarSummary data={callsSummaryData} iconName="call" title="Calls" />
    <SidebarSummary
      data={serviceSummaryData}
      iconName="support"
      title="Service"
    />
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pathname: T.string.isRequired,
  sidebarSummaryData: T.shape({
    callsSummaryData: T.array,
    loanSummaryData: T.array,
    paymentSummaryData: T.array,
    serviceSummaryData: T.array,
  }).isRequired,
};

export default Sidebar;
