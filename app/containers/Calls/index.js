/**
 * Calls
 * @description ...
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CallsView from 'components/CallsView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalls from './selectors';
import reducer from './reducer';
import saga from './saga';

export const Calls = () => {
  useInjectReducer({ key: 'calls', reducer });
  useInjectSaga({ key: 'calls', saga });

  return <CallsView />;
};

Calls.propTypes = {};

const mapStateToProps = createStructuredSelector({
  calls: makeSelectCalls(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Calls);
