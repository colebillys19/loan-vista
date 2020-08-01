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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalls, { makeSelectCallsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCallsData } from './actions';

export const Calls = ({ callsData, dispatchFetchCallsData, loading }) => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  useEffect(() => {
    dispatchFetchCallsData();
  }, []);

  return <CallsView callsData={callsData} loading={loading} />;
};

Calls.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  loading: T.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  callsData: makeSelectCallsData(),
  loading: makeSelectCalls('loading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCallsData: () => dispatch(fetchCallsData()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
