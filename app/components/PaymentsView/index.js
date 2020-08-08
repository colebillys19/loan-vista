/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListFilter from 'components/ListFilter';
import PaymentsList from 'components/PaymentsList';
import TabWrapper from 'components/TabWrapper';
import ConditionalRender from 'components/_baseUI/ConditionalRender';
import Spinner from 'components/_baseUI/Spinner';
import NoListDataFallback from 'components/_baseUI/NoListDataFallback';

const PaymentsView = ({ loading, paymentsData }) => {
  const noListData = !loading && paymentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="payments-tab" id="payments-view">
      <ListFilter />
      <ConditionalRender
        Component={
          <ConditionalRender
            Component={
              <PaymentsList paymentsData={paymentsData} loading={loading} />
            }
            FallbackComponent={<Spinner />}
            shouldRender={!loading}
          />
        }
        FallbackComponent={<NoListDataFallback />}
        shouldRender={!noListData}
      />
    </TabWrapper>
  );
};

PaymentsView.propTypes = {
  loading: T.bool.isRequired,
  paymentsData: T.array.isRequired,
};

export default PaymentsView;
