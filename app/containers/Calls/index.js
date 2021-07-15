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
import CallsView from 'components/CallsView';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListFallback from 'components/_shared/ListFallback';
import makeSelectMain from 'containers/Main/selectors';

import makeSelectCalls, { makeSelectCallsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCallsData } from './actions';

export const Calls = ({
  callsData: { data, listHeaders },
  dispatchFetchCallsData,
  error,
  lastFetchParams: { sortCol: lastSortCol, sortOrder: lastSortOrder },
  loading,
  mainError,
  nextPageToFetch,
  scrollLoading,
  sortLoading,
}) => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  useEffect(() => {
    dispatchFetchCallsData();
  }, [dispatchFetchCallsData]);

  return (
    <ConditionalRender
      Component={
        <CallsView
          callsData={data}
          dispatchFetchCallsData={dispatchFetchCallsData}
          lastSortCol={lastSortCol}
          lastSortOrder={lastSortOrder}
          listHeaders={listHeaders}
          nextPageToFetch={nextPageToFetch}
          scrollLoading={scrollLoading}
          sortLoading={sortLoading}
        />
      }
      FallbackComponent={<ListFallback error={error} loading={loading} />}
      shouldRender={!error && !mainError && !loading && !!data.length}
    />
  );
};

Calls.propTypes = {
  callsData: T.shape({ data: T.array, listHeaders: T.array }).isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  lastFetchParams: T.objectOf(T.string).isRequired,
  loading: T.bool.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
  nextPageToFetch: T.number.isRequired,
  scrollLoading: T.bool.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  callsData: makeSelectCallsData(),
  error: makeSelectCalls('error'),
  lastFetchParams: makeSelectCalls('lastFetchParams'),
  loading: makeSelectCalls('loading'),
  mainError: makeSelectMain('error'),
  nextPageToFetch: makeSelectCalls('nextPageToFetch'),
  pathname: makeSelectPathname(),
  scrollLoading: makeSelectCalls('scrollLoading'),
  sortLoading: makeSelectCalls('sortLoading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCallsData: (sortCol, sortOrder) =>
    dispatch(fetchCallsData(sortCol, sortOrder)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
