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
import CallsList from 'components/CallsList';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListFallback from 'components/_base-ui/ListFallback';
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
  lastFetchParams: {
    dateFrom: lastDateFrom,
    sortCol: lastSortCol,
    sortOrder: lastSortOrder,
  },
  loading,
  loanNumber,
  mainError,
  sortLoading,
}) => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  const prevLoanNumber = usePrevious(loanNumber);

  useEffect(() => {
    if (!loanNumber) {
      dispatchSetLoadingTrue();
    } else if (
      !lastDateFrom ||
      (prevLoanNumber && loanNumber !== prevLoanNumber)
    ) {
      dispatchFetchCallsData();
    }
  }, [
    dispatchFetchCallsData,
    dispatchSetLoadingTrue,
    lastDateFrom,
    loading,
    loanNumber,
    prevLoanNumber,
  ]);

  return (
    <ConditionalRender
      Component={
        <CallsList
          callsData={callsData}
          dispatchFetchCallsData={dispatchFetchCallsData}
          lastSortCol={lastSortCol}
          lastSortOrder={lastSortOrder}
          sortLoading={sortLoading}
        />
      }
      FallbackComponent={<ListFallback error={error} loading={loading} />}
      shouldRender={!error && !mainError && !loading && !!callsData.length}
    />
  );
};

Calls.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  dispatchSetLoadingTrue: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  lastFetchParams: T.shape({
    dateFrom: T.string,
    dateTo: T.string,
    keyword: T.string,
    sortCol: T.string,
    sortOrder: T.string,
  }).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
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
