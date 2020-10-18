/**
 * Calls
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CallsView from 'components/CallsView';
import { makeSelectPathname } from 'containers/App/selectors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalls, {
  makeSelectCallsData,
  makeSelectSortValues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCallsData, onUnmount } from './actions';

export const Calls = ({
  callsData,
  dispatchFetchCallsData,
  dispatchOnUnmount,
  error,
  fetchParams,
  loading,
  pathname,
  sortValues,
}) => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  useEffect(() => {
    dispatchFetchCallsData();

    return () => dispatchOnUnmount();
  }, []);

  return (
    <CallsView
      callsData={callsData}
      dispatchFetchCallsData={dispatchFetchCallsData}
      error={error}
      fetchParams={fetchParams}
      loading={loading}
      pathname={pathname}
      sortValues={sortValues}
    />
  );
};

Calls.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  pathname: T.string.isRequired,
  sortValues: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  callsData: makeSelectCallsData(),
  error: makeSelectCalls('error'),
  fetchParams: makeSelectCalls('fetchParams'),
  loading: makeSelectCalls('loading'),
  pathname: makeSelectPathname(),
  sortValues: makeSelectSortValues(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCallsData: (props) => dispatch(fetchCallsData(props)),
  dispatchOnUnmount: () => dispatch(onUnmount()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
