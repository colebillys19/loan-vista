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
import TabWrapper from 'components/_base-ui/TabWrapper';

const PaymentsView = ({
  dispatchFetchPaymentsData,
  error,
  fetchParams,
  loading,
  paymentsData,
  sortLoading,
  sortValues,
}) => {
  const noListData = !loading && paymentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="payments-tab" id="payments-view">
      <ListFilter
        fetchParams={fetchParams}
        dispatchFetchData={dispatchFetchPaymentsData}
      />
      <ConditionalRender
        Component={
          <PaymentsList
            paymentsData={paymentsData}
            dispatchFetchPaymentsData={dispatchFetchPaymentsData}
            sortLoading={sortLoading}
            sortValues={sortValues}
          />
        }
        FallbackComponent={<ListFallback error={error} loading={loading} />}
        shouldRender={!error && !loading && !noListData}
      />
    </TabWrapper>
  );
};

PaymentsView.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  paymentsData: T.array.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

export default PaymentsView;
