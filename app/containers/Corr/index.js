/**
 * Corr
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CorrView from 'components/CorrView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCorrData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCorrData } from './actions';

export const Corr = ({ corrData, dispatchFetchCorrData }) => {
  useInjectReducer({ key: 'corr', reducer });
  useInjectSaga({ key: 'corr', saga });

  useEffect(() => {
    dispatchFetchCorrData();
  }, []);

  return <CorrView corrData={corrData} />;
};

Corr.propTypes = {
  corrData: T.array.isRequired,
  dispatchFetchCorrData: T.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  corrData: makeSelectCorrData(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCorrData: () => dispatch(fetchCorrData()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Corr);
