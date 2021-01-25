/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListFilter from 'components/ListFilter';
import PaymentsList from 'components/PaymentsList';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListFallback from 'components/_base-ui/ListFallback';
import TabContainer from 'components/_base-ui/TabContainer';

const PaymentsView = ({
  dispatchFetchPaymentsData,
  error,
  fetchParams,
  loading,
  noDataFetched,
  paymentsData,
  sortLoading,
  sortValues,
}) => (
  <TabContainer aria-labelledby="payments-tab" id="payments-view">
    <ListFilter
      dispatchFetchData={dispatchFetchPaymentsData}
      fetchParams={fetchParams}
    />
    <ConditionalRender
      Component={
        <PaymentsList
          dispatchFetchPaymentsData={dispatchFetchPaymentsData}
          paymentsData={paymentsData}
          sortLoading={sortLoading}
          sortValues={sortValues}
        />
      }
      FallbackComponent={<ListFallback error={error} loading={loading} />}
      shouldRender={!error && !loading && !noDataFetched}
    />
  </TabContainer>
);

PaymentsView.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  noDataFetched: T.bool.isRequired,
  paymentsData: T.array.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

export default PaymentsView;
