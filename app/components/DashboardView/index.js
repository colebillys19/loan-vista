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

const DashboardView = (props) => {
  const {
    dashboardBorrowerData,
    dashboardListsData: { callsData, documentsData, paymentsData },
    dashboardLoanData,
    error,
    loading,
    loanNumber,
  } = props;
  const showComponents = loanNumber && !error && !loading;

  return (
    <TabContainer aria-labelledby="dashboard-tab" id="dashboard-view">
      <DashboardBorrower
        data={dashboardBorrowerData}
        renderLoading={!showComponents}
      />
      <DashboardLoan data={dashboardLoanData} renderLoading={!showComponents} />
      <DashboardCalls data={callsData} renderLoading={!showComponents} />
      <DashboardDocuments
        data={documentsData}
        renderLoading={!showComponents}
      />
      <DashboardPayments data={paymentsData} renderLoading={!showComponents} />
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
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
};

export default DashboardView;
