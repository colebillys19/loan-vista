/**
 * Corr
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CorrView from 'components/CorrView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCorr from './selectors';
import reducer from './reducer';
import saga from './saga';

export const Corr = () => {
  useInjectReducer({ key: 'corr', reducer });
  useInjectSaga({ key: 'corr', saga });

  return <CorrView />;
};

Corr.propTypes = {};

const mapStateToProps = createStructuredSelector({
  corr: makeSelectCorr(),
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

export default compose(withConnect)(Corr);
