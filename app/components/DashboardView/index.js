/**
 * DashboardView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/_base-ui/TabWrapper';
import DashboardBorrower from 'components/DashboardBorrower';
import DashboardList from 'components/DashboardList';
import DashboardLoan from 'components/DashboardLoan';

const DashboardView = () => (
  <TabWrapper aria-labelledby="dashboard-tab" id="dashboard-view">
    <div style={{ outline: '1px solid green' }}>
      <DashboardBorrower />
      <DashboardLoan />
      <DashboardList>Calls</DashboardList>
      <DashboardList>Documents</DashboardList>
      <DashboardList>Payments</DashboardList>
    </div>
  </TabWrapper>
);

DashboardView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default DashboardView;
