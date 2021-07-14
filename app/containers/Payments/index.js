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
// import { usePrevious } from 'utils/customHooks';
import PaymentsView from 'components/PaymentsView';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListFallback from 'components/_shared/ListFallback';
import makeSelectMain from 'containers/Main/selectors';

import makeSelectPayments, { makeSelectPaymentsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import { fetchPaymentsData, setLoadingTrue } from './actions';
import { fetchPaymentsData } from './actions';

export const Payments = ({
  dispatchFetchPaymentsData,
  // dispatchSetLoadingTrue,
  error,
  lastFetchParams: {
    // dateFrom: lastDateFrom,
    sortCol: lastSortCol,
    sortOrder: lastSortOrder,
  },
  loading,
  // loanNumber,
  mainError,
  nextPageToFetch,
  paymentsData: { data, listHeaders },
  scrollLoading,
  sortLoading,
}) => {
  useInjectReducer({ key: 'payments', reducer });
  useInjectSaga({ key: 'payments', saga });

  // const prevLoanNumber = usePrevious(loanNumber);

  useEffect(() => {
    dispatchFetchPaymentsData();
  }, [dispatchFetchPaymentsData]);

  // useEffect(() => {
  //   if (!loanNumber) {
  //     dispatchSetLoadingTrue();
  //   } else if (
  //     !loading &&
  //     (!lastDateFrom || (prevLoanNumber && loanNumber !== prevLoanNumber))
  //   ) {
  //     dispatchFetchPaymentsData();
  //   }
  // }, [
  //   dispatchFetchPaymentsData,
  //   dispatchSetLoadingTrue,
  //   lastDateFrom,
  //   loading,
  //   loanNumber,
  //   prevLoanNumber,
  // ]);

  return (
    <ConditionalRender
      Component={
        <PaymentsView
          dispatchFetchPaymentsData={dispatchFetchPaymentsData}
          lastSortCol={lastSortCol}
          lastSortOrder={lastSortOrder}
          listHeaders={listHeaders}
          nextPageToFetch={nextPageToFetch}
          paymentsData={data}
          scrollLoading={scrollLoading}
          sortLoading={sortLoading}
        />
      }
      FallbackComponent={<ListFallback error={error} loading={loading} />}
      shouldRender={!error && !mainError && !loading && !!data.length}
    />
  );
};

Payments.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  // dispatchSetLoadingTrue: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  lastFetchParams: T.objectOf(T.string).isRequired,
  loading: T.bool.isRequired,
  // loanNumber: T.string.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
  nextPageToFetch: T.number.isRequired,
  paymentsData: T.shape({ data: T.array, listHeaders: T.array }).isRequired,
  scrollLoading: T.bool.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectPayments('error'),
  lastFetchParams: makeSelectPayments('lastFetchParams'),
  loading: makeSelectPayments('loading'),
  // loanNumber: makeSelectMain('loanNumber'),
  mainError: makeSelectMain('error'),
  nextPageToFetch: makeSelectPayments('nextPageToFetch'),
  pathname: makeSelectPathname(),
  paymentsData: makeSelectPaymentsData(),
  scrollLoading: makeSelectPayments('scrollLoading'),
  sortLoading: makeSelectPayments('sortLoading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPaymentsData: (sortCol, sortOrder) =>
    dispatch(fetchPaymentsData(sortCol, sortOrder)),
  // dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Payments);
