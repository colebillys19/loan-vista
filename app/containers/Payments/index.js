/**
 * Payments
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PaymentsView from 'components/PaymentsView';
import { makeSelectPathname } from 'containers/App/selectors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPayments, { makeSelectPaymentsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchPaymentsData, onUnmount } from './actions';

export const Payments = ({
  dispatchFetchPaymentsData,
  dispatchOnUnmount,
  loading,
  paymentsData,
  pathname,
}) => {
  useInjectReducer({ key: 'payments', reducer });
  useInjectSaga({ key: 'payments', saga });

  useEffect(() => {
    dispatchFetchPaymentsData();

    return () => {
      dispatchOnUnmount();
    };
  }, []);

  return (
    <PaymentsView
      loading={loading}
      pathname={pathname}
      paymentsData={paymentsData}
    />
  );
};

Payments.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  loading: T.bool.isRequired,
  pathname: T.string.isRequired,
  paymentsData: T.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectPayments('loading'),
  pathname: makeSelectPathname(),
  paymentsData: makeSelectPaymentsData(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPaymentsData: () => dispatch(fetchPaymentsData()),
  dispatchOnUnmount: () => dispatch(onUnmount()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Payments);
