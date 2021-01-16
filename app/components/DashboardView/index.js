/**
 * DashboardView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/_base-ui/TabWrapper';

const DashboardView = () => (
  <TabWrapper aria-labelledby="dashboard-tab" id="dashboard-view">
    <div style={{ padding: '1rem' }}>DashboardView</div>
  </TabWrapper>
);

DashboardView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default DashboardView;
