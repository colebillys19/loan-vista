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

import makeSelectCalls, {
  makeSelectCallsData,
  makeSelectSortValues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCallsData, onUnmount, setLoadingTrue } from './actions';

export const Calls = ({
  callsData,
  dispatchFetchCallsData,
  dispatchOnUnmount,
  dispatchSetLoadingTrue,
  error,
  fetchParams,
  loading,
  loanNumber,
  noDataFetched,
  pathname,
  sortLoading,
  sortValues,
}) => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  const prevLoanNumber = usePrevious(loanNumber);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => dispatchOnUnmount(), []);

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
      error={error}
      fetchParams={fetchParams}
      loading={loading}
      noDataFetched={noDataFetched}
      pathname={pathname}
      sortLoading={sortLoading}
      sortValues={sortValues}
    />
  );
};

Calls.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  dispatchSetLoadingTrue: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  noDataFetched: T.bool.isRequired,
  pathname: T.string.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  callsData: makeSelectCallsData(),
  error: makeSelectCalls('error'),
  fetchParams: makeSelectCalls('fetchParams'),
  loading: makeSelectCalls('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  noDataFetched: makeSelectCalls('noDataFetched'),
  pathname: makeSelectPathname(),
  sortLoading: makeSelectCalls('sortLoading'),
  sortValues: makeSelectSortValues(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCallsData: (payload) => dispatch(fetchCallsData(payload)),
  dispatchOnUnmount: () => dispatch(onUnmount()),
  dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
