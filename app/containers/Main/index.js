/**
 * Main
 * @description ...
 */

import { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectPathname } from 'containers/App/selectors';
import { usePrevious } from 'utils/customHooks';
import { isValidRoute } from 'utils/globalHelpers';

import makeSelectMain, {
  makeSelectDashboardBorrowerData,
  makeSelectDashboardListsData,
  makeSelectDashboardLoanData,
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchLoanData } from './actions';

export const Main = ({
  dashboardBorrowerData,
  dashboardListsData,
  dashboardLoanData,
  dispatchFetchLoanData,
  error,
  loading,
  loanNumber,
  pathname,
  render,
  sidebarHeaderData,
  sidebarSummariesData,
}) => {
  useInjectReducer({ key: 'main', reducer });
  useInjectSaga({ key: 'main', saga });

  const prevLoanNumber = usePrevious(loanNumber);

  useEffect(() => {
    if (isValidRoute(pathname)) {
      if (!loanNumber) {
        dispatchFetchLoanData('9937485204');
      } else if (loanNumber !== prevLoanNumber) {
        dispatchFetchLoanData(loanNumber);
      }
    }
  }, [dispatchFetchLoanData, loanNumber, pathname, prevLoanNumber]);

  return render({
    dashboardBorrowerData,
    dashboardListsData,
    dashboardLoanData,
    error,
    loading,
    loanNumber,
    sidebarHeaderData,
    sidebarSummariesData,
  });
};

Main.propTypes = {
  dashboardBorrowerData: T.array.isRequired,
  dashboardListsData: T.object.isRequired,
  dashboardLoanData: T.object.isRequired,
  dispatchFetchLoanData: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  pathname: T.string.isRequired,
  render: T.func.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummariesData: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardBorrowerData: makeSelectDashboardBorrowerData(),
  dashboardListsData: makeSelectDashboardListsData(),
  dashboardLoanData: makeSelectDashboardLoanData(),
  error: makeSelectMain('error'),
  loading: makeSelectMain('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  pathname: makeSelectPathname(),
  sidebarHeaderData: makeSelectSidebarHeaderData(),
  sidebarSummariesData: makeSelectSidebarSummariesData(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchLoanData: (loanNumber) => dispatch(fetchLoanData(loanNumber)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Main);
