/**
 * DashboardView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import DashboardBorrower from 'components/DashboardBorrower';
import DashboardCalls from 'components/DashboardCalls';
import DashboardDocuments from 'components/DashboardDocuments';
import DashboardLoan from 'components/DashboardLoan';
import DashboardPayments from 'components/DashboardPayments';
import TabContainer from 'components/_shared/TabContainer';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ErrorModal from 'components/_shared/ErrorModal';

const DashboardView = ({
  dashboardBorrowerData,
  dashboardListsData: { callsData, documentsData, paymentsData },
  dashboardLoanData,
  dispatchNavigation,
  error,
}) => (
  <TabContainer aria-labelledby="dashboard-tab" id="dashboard-view">
    <DashboardBorrower data={dashboardBorrowerData} />
    <DashboardLoan data={dashboardLoanData} />
    <DashboardCalls data={callsData} dispatchNavigation={dispatchNavigation} />
    <DashboardDocuments
      data={documentsData}
      dispatchNavigation={dispatchNavigation}
    />
    <DashboardPayments
      data={paymentsData}
      dispatchNavigation={dispatchNavigation}
    />
    <ConditionalRender
      Component={ErrorModal}
      propsToPassDown={{ error }}
      shouldRender={!!error}
    />
  </TabContainer>
);

DashboardView.propTypes = {
  dashboardBorrowerData: T.array.isRequired,
  dashboardListsData: T.shape({
    callsData: T.object,
    documentsData: T.object,
    paymentsData: T.object,
  }).isRequired,
  dashboardLoanData: T.object.isRequired,
  dispatchNavigation: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
};

export default DashboardView;
