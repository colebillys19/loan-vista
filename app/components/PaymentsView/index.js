/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import PaymentsList from 'components/PaymentsList';
import TabWrapper from 'components/TabWrapper';
import ConditionalRender from 'components/_baseUI/ConditionalRender';
import Spinner from 'components/_baseUI/Spinner';
import NoListDataFallback from 'components/_baseUI/NoListDataFallback';

const PaymentsView = ({ paymentsData, loading }) => {
  const noListData = !loading && paymentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="payments-tab" id="payments-view">
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
  paymentsData: T.array.isRequired,
  loading: T.bool.isRequired,
};

export default PaymentsView;
