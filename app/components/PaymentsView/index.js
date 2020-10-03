/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListFilter from 'components/ListFilter';
import PaymentsList from 'components/PaymentsList';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListRenderFallback from 'components/_base-ui/ListRenderFallback';
import TableHeadBorder from 'components/_base-ui/TableHeadBorder';
import TabWrapper from 'components/_base-ui/TabWrapper';

const PaymentsView = ({
  dispatchFetchPaymentsData,
  error,
  fetchParams,
  loading,
  paymentsData,
  sortValues,
}) => {
  const noListData = !loading && paymentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="payments-tab" id="payments-view">
      <ListFilter
        fetchParams={fetchParams}
        dispatchFetchData={dispatchFetchPaymentsData}
      />
      <TableHeadBorder hideBottom={loading || noListData} />
      <ConditionalRender
        Component={
          <PaymentsList
            paymentsData={paymentsData}
            dispatchFetchPaymentsData={dispatchFetchPaymentsData}
            loading={loading}
            sortValues={sortValues}
          />
        }
        FallbackComponent={<ListRenderFallback error={error} />}
        shouldRender={!error && !noListData}
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
  sortValues: T.object.isRequired,
};

export default PaymentsView;
