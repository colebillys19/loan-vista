/**
 * Main
 * @description ...
 */

import { useContext, useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Context from 'Context';
import { isValidRoute } from 'utils/globalHelpers';
import { makeSelectPathname } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { usePrevious } from 'utils/customHooks';

import makeSelectMain, {
  makeSelectAudioModalData,
  makeSelectDashboardBorrowerData,
  makeSelectDashboardListsData,
  makeSelectDashboardLoanData,
  makeSelectDownloadModalData,
  makeSelectEscrowEscrow,
  makeSelectEscrowHomeowners,
  makeSelectEscrowMortgage,
  makeSelectEscrowTaxes,
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  clearListModalData,
  fetchLoanData,
  setAudioModalData,
  setDownloadModalData,
} from './actions';

export const Main = ({
  audioModalData,
  dashboardBorrowerData,
  dashboardListsData,
  dashboardLoanData,
  dispatchClearListModalData,
  dispatchFetchLoanData,
  dispatchSetAudioModalData,
  dispatchSetDownloadModalData,
  downloadModalData,
  error,
  escrowEscrowData,
  escrowHomeownersData,
  escrowMortgageData,
  escrowTaxesData,
  loading,
  loanNumber,
  pathname,
  render,
  sidebarHeaderData,
  sidebarSummariesData,
}) => {
  useInjectReducer({ key: 'main', reducer });
  useInjectSaga({ key: 'main', saga });

  // eslint-disable-next-line
  const [context, setContext] = useContext(Context);

  const prevLoanNumber = usePrevious(loanNumber);

  useEffect(() => {
    if (isValidRoute(pathname)) {
      if (!loading && !loanNumber && !error) {
        dispatchFetchLoanData('9937485204');
      } else if (prevLoanNumber && loanNumber !== prevLoanNumber) {
        dispatchFetchLoanData(loanNumber);
      }
    }
  }, [
    dispatchFetchLoanData,
    error,
    loading,
    loanNumber,
    pathname,
    prevLoanNumber,
  ]);

  useEffect(() => {
    setContext({ mainError: !!error, mainLoading: loading });
  }, [error, loading, setContext]);

  return render({
    audioModalData,
    dashboardBorrowerData,
    dashboardListsData,
    dashboardLoanData,
    dispatchClearListModalData,
    dispatchSetAudioModalData,
    dispatchSetDownloadModalData,
    downloadModalData,
    error,
    escrowEscrowData,
    escrowHomeownersData,
    escrowMortgageData,
    escrowTaxesData,
    sidebarHeaderData,
    sidebarSummariesData,
  });
};

Main.propTypes = {
  audioModalData: T.oneOfType([T.bool, T.object]).isRequired,
  dashboardBorrowerData: T.array.isRequired,
  dashboardListsData: T.object.isRequired,
  dashboardLoanData: T.object.isRequired,
  dispatchClearListModalData: T.func.isRequired,
  dispatchFetchLoanData: T.func.isRequired,
  dispatchSetAudioModalData: T.func.isRequired,
  dispatchSetDownloadModalData: T.func.isRequired,
  downloadModalData: T.oneOfType([T.bool, T.object]).isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  escrowEscrowData: T.object.isRequired,
  escrowHomeownersData: T.array.isRequired,
  escrowMortgageData: T.array.isRequired,
  escrowTaxesData: T.array.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  pathname: T.string.isRequired,
  render: T.func.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummariesData: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  audioModalData: makeSelectAudioModalData(),
  dashboardBorrowerData: makeSelectDashboardBorrowerData(),
  dashboardListsData: makeSelectDashboardListsData(),
  dashboardLoanData: makeSelectDashboardLoanData(),
  downloadModalData: makeSelectDownloadModalData(),
  error: makeSelectMain('error'),
  escrowEscrowData: makeSelectEscrowEscrow(),
  escrowHomeownersData: makeSelectEscrowHomeowners(),
  escrowMortgageData: makeSelectEscrowMortgage(),
  escrowTaxesData: makeSelectEscrowTaxes(),
  loading: makeSelectMain('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  pathname: makeSelectPathname(),
  sidebarHeaderData: makeSelectSidebarHeaderData(),
  sidebarSummariesData: makeSelectSidebarSummariesData(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchClearListModalData: () => dispatch(clearListModalData()),
  dispatchFetchLoanData: (loanNumber) => dispatch(fetchLoanData(loanNumber)),
  dispatchSetAudioModalData: (data) => dispatch(setAudioModalData(data)),
  dispatchSetDownloadModalData: (data) => dispatch(setDownloadModalData(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Main);
