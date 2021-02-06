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
import TabContainer from 'components/_base-ui/TabContainer';
import ErrorModal from 'components/_base-ui/ErrorModal';

const DashboardView = ({
  dashboardBorrowerData,
  dashboardListsData: { callsData, documentsData, paymentsData },
  dashboardLoanData,
  dispatchNavigation,
  error,
  loading,
  loanNumber,
}) => {
  const showComponents = loanNumber && !error && !loading;

  return (
    <TabContainer aria-labelledby="dashboard-tab" id="dashboard-view">
      <DashboardBorrower
        data={dashboardBorrowerData}
        renderLoading={!showComponents}
      />
      <DashboardLoan data={dashboardLoanData} renderLoading={!showComponents} />
      <DashboardCalls
        data={callsData}
        dispatchNavigation={dispatchNavigation}
        renderLoading={!showComponents}
      />
      <DashboardDocuments
        data={documentsData}
        dispatchNavigation={dispatchNavigation}
        renderLoading={!showComponents}
      />
      <DashboardPayments
        data={paymentsData}
        dispatchNavigation={dispatchNavigation}
        renderLoading={!showComponents}
      />
      <ErrorModal error={error} />
    </TabContainer>
  );
};

DashboardView.propTypes = {
  dashboardBorrowerData: T.array.isRequired,
  dashboardListsData: T.shape({
    callsData: T.array,
    documentsData: T.array,
    paymentsData: T.array,
  }).isRequired,
  dashboardLoanData: T.object.isRequired,
  dispatchNavigation: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
};

export default DashboardView;
