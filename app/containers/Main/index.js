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

import makeSelectMain, {
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchLoanData } from './actions';
import { isValidRoute } from './helpers';

export const Main = ({
  dispatchFetchLoanData,
  loading,
  loanNumber,
  pathname,
  render,
  sidebarHeaderData,
  sidebarSummariesData,
}) => {
  useInjectReducer({ key: 'main', reducer });
  useInjectSaga({ key: 'main', saga });

  useEffect(() => {
    if (!loanNumber && isValidRoute(pathname)) {
      dispatchFetchLoanData();
    }
  }, [pathname]);

  return render({ loading, sidebarHeaderData, sidebarSummariesData });
};

Main.propTypes = {
  dispatchFetchLoanData: T.func.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  pathname: T.string.isRequired,
  render: T.func.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummariesData: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectMain('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  pathname: makeSelectPathname(),
  sidebarHeaderData: makeSelectSidebarHeaderData(),
  sidebarSummariesData: makeSelectSidebarSummariesData(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchLoanData: () => dispatch(fetchLoanData()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Main);
