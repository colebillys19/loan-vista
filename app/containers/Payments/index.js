import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PaymentsView from 'components/PaymentsView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectPaymentsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchPaymentsData } from './actions';

export const Payments = ({ paymentsData, dispatchFetchPaymentsData }) => {
  useInjectReducer({ key: 'payments', reducer });
  useInjectSaga({ key: 'payments', saga });

  useEffect(() => {
    dispatchFetchPaymentsData();
  }, []);

  return <PaymentsView paymentsData={paymentsData} />;
};

Payments.propTypes = {
  paymentsData: T.array.isRequired,
  dispatchFetchPaymentsData: T.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  paymentsData: makeSelectPaymentsData(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPaymentsData: () => dispatch(fetchPaymentsData()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Payments);
