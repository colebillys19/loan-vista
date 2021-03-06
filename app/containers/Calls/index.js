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
import {
  fetchCallsData,
  setLoadingTrue,
  updateFilterParam,
  updateSortParam,
} from './actions';

export const Calls = ({
  callsData,
  currentFilterParams,
  currentSortParams,
  dispatchFetchCallsData,
  dispatchSetLoadingTrue,
  dispatchUpdateParam,
  error,
  loading,
  loanNumber,
  mainError,
  noDataFetched,
  oldFilterParams,
  oldSortParams,
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
      currentFilterParams={currentFilterParams}
      currentSortParams={currentSortParams}
      dispatchFetchCallsData={dispatchFetchCallsData}
      dispatchUpdateParam={dispatchUpdateParam}
      error={mainError || error}
      loading={loading}
      noDataFetched={noDataFetched}
      oldFilterParams={oldFilterParams}
      oldSortParams={oldSortParams}
      pathname={pathname}
      sortLoading={sortLoading}
    />
  );
};

Calls.propTypes = {
  callsData: T.array.isRequired,
  currentFilterParams: T.object.isRequired,
  currentSortParams: T.object.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  dispatchSetLoadingTrue: T.func.isRequired,
  dispatchUpdateParam: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
  noDataFetched: T.bool.isRequired,
  oldFilterParams: T.object.isRequired,
  oldSortParams: T.object.isRequired,
  pathname: T.string.isRequired,
  sortLoading: T.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  callsData: makeSelectCallsData(),
  currentFilterParams: makeSelectCalls('currentFilterParams'),
  currentSortParams: makeSelectCalls('currentSortParams'),
  error: makeSelectCalls('error'),
  loading: makeSelectCalls('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  mainError: makeSelectMain('error'),
  noDataFetched: makeSelectCalls('noDataFetched'),
  oldFilterParams: makeSelectCalls('oldFilterParams'),
  oldSortParams: makeSelectCalls('oldSortParams'),
  pathname: makeSelectPathname(),
  sortLoading: makeSelectCalls('sortLoading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCallsData: (payload) => dispatch(fetchCallsData(payload)),
  dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
  dispatchUpdateFilterParam: (payload) => dispatch(updateFilterParam(payload)),
  dispatchUpdateSortParam: (payload) => dispatch(updateSortParam(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
