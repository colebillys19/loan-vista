/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListFilter from 'components/ListFilter';
import PaymentsList from 'components/PaymentsList';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import NoListDataFallback from 'components/_base-ui/NoListDataFallback';
import Spinner from 'components/_base-ui/Spinner';
import TableHeadBorder from 'components/_base-ui/TableHeadBorder';
import TabWrapper from 'components/_base-ui/TabWrapper';

const PaymentsView = ({ loading, paymentsData }) => {
  const noListData = !loading && paymentsData.length === 0;

  return (
    <TabWrapper aria-labelledby="payments-tab" id="payments-view">
      <ListFilter />
      <TableHeadBorder />
      <ConditionalRender
        Component={
          <ConditionalRender
            Component={
              <PaymentsList
                paymentsData={paymentsData}
                loading={loading}
                sortColumn="date"
              />
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
