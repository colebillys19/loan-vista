/**
 * Payments
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
import makeSelectMain from 'containers/Main/selectors';
import PaymentsView from 'components/PaymentsView';

import makeSelectPayments, {
  makeSelectPaymentsData,
  makeSelectSortValues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchPaymentsData, onUnmount, setLoadingTrue } from './actions';

export const Payments = ({
  dispatchFetchPaymentsData,
  dispatchOnUnmount,
  dispatchSetLoadingTrue,
  error,
  fetchParams,
  loading,
  loanNumber,
  noDataFetched,
  pathname,
  paymentsData,
  sortLoading,
  sortValues,
}) => {
  useInjectReducer({ key: 'payments', reducer });
  useInjectSaga({ key: 'payments', saga });

  const prevLoanNumber = usePrevious(loanNumber);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => dispatchOnUnmount(), []);

  useEffect(() => {
    if (!loanNumber) {
      dispatchSetLoadingTrue();
    } else if (loanNumber !== prevLoanNumber) {
      dispatchFetchPaymentsData();
    }
  }, [
    dispatchFetchPaymentsData,
    dispatchSetLoadingTrue,
    loanNumber,
    pathname,
    prevLoanNumber,
  ]);

  return (
    <PaymentsView
      dispatchFetchPaymentsData={dispatchFetchPaymentsData}
      error={error}
      fetchParams={fetchParams}
      loading={loading}
      noDataFetched={noDataFetched}
      pathname={pathname}
      paymentsData={paymentsData}
      sortLoading={sortLoading}
      sortValues={sortValues}
    />
  );
};

Payments.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  dispatchSetLoadingTrue: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  noDataFetched: T.bool.isRequired,
  pathname: T.string.isRequired,
  paymentsData: T.array.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectPayments('error'),
  fetchParams: makeSelectPayments('fetchParams'),
  loading: makeSelectPayments('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  noDataFetched: makeSelectPayments('noDataFetched'),
  pathname: makeSelectPathname(),
  paymentsData: makeSelectPaymentsData(),
  sortLoading: makeSelectPayments('sortLoading'),
  sortValues: makeSelectSortValues(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPaymentsData: (props) => dispatch(fetchPaymentsData(props)),
  dispatchOnUnmount: () => dispatch(onUnmount()),
  dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Payments);
