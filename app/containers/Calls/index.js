/**
 * Calls
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectPathname } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { usePrevious } from 'utils/customHooks';
import CallsView from 'components/CallsView';
import makeSelectMain from 'containers/Main/selectors';

import makeSelectCalls, { makeSelectCallsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCallsData, setLoadingTrue } from './actions';

export const Calls = ({
  callsData,
  dispatchFetchCallsData,
  dispatchSetLoadingTrue,
  error,
  lastFetchParams,
  loading,
  loanNumber,
  mainError,
  pathname,
  sortLoading,
}) => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  const prevLoanNumber = usePrevious(loanNumber);

  useEffect(() => {
    if (!loanNumber) {
      dispatchSetLoadingTrue();
    } else if (loanNumber !== prevLoanNumber) {
      dispatchFetchCallsData();
    }
  }, [
    dispatchFetchCallsData,
    dispatchSetLoadingTrue,
    loanNumber,
    pathname,
    prevLoanNumber,
  ]);

  return (
    <CallsView
      callsData={callsData}
      dispatchFetchCallsData={dispatchFetchCallsData}
      error={mainError || error}
      lastFetchParams={lastFetchParams}
      loading={loading}
      pathname={pathname}
      sortLoading={sortLoading}
    />
  );
};

Calls.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  dispatchSetLoadingTrue: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  lastFetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
  pathname: T.string.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  callsData: makeSelectCallsData(),
  error: makeSelectCalls('error'),
  lastFetchParams: makeSelectCalls('lastFetchParams'),
  loading: makeSelectCalls('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  mainError: makeSelectMain('error'),
  pathname: makeSelectPathname(),
  sortLoading: makeSelectCalls('sortLoading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCallsData: (sortCol, sortOrder) =>
    dispatch(fetchCallsData(sortCol, sortOrder)),
  dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
