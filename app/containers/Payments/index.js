import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PaymentsView from 'components/PaymentsView';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPayments from './selectors';
import reducer from './reducer';
import saga from './saga';

export const Payments = () => {
  useInjectReducer({ key: 'payments', reducer });
  useInjectSaga({ key: 'payments', saga });

  return <PaymentsView />;
};

Payments.propTypes = {};

const mapStateToProps = createStructuredSelector({
  payments: makeSelectPayments(),
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

export default compose(withConnect)(Payments);
