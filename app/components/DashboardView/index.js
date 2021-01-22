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
import TabContainer from 'components/_base-ui/TabContainer';

const DashboardView = () => {
  const showComponents = true;

  return (
    <TabContainer aria-labelledby="dashboard-tab" id="dashboard-view">
      <DashboardBorrower renderLoading={!showComponents} />
      <DashboardLoan renderLoading={!showComponents} />
      <DashboardCalls renderLoading={!showComponents} />
      <DashboardDocuments renderLoading={!showComponents} />
      <DashboardPayments renderLoading={!showComponents} />
    </TabContainer>
  );
};

DashboardView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default DashboardView;
