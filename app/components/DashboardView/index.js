/**
 * DashboardView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import DashboardBorrower from 'components/DashboardBorrower';
import DashboardCalls from 'components/DashboardCalls';
import DashboardDocuments from 'components/DashboardDocuments';
import DashboardLoan from 'components/DashboardLoan';
import DashboardPayments from 'components/DashboardPayments';
import TabWrapper from 'components/_base-ui/TabWrapper';

const DashboardView = () => (
  <TabWrapper aria-labelledby="dashboard-tab" id="dashboard-view">
    <DashboardBorrower />
    <DashboardLoan />
    <DashboardCalls />
    <DashboardDocuments />
    <DashboardPayments />
  </TabWrapper>
);

DashboardView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default DashboardView;
