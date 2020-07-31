/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import PaymentsList from 'components/PaymentsList';
import TabWrapper from 'components/TabWrapper';

import { PaymentsViewWrapper } from './styledComponents';

const PaymentsView = ({ paymentsData }) => (
  <TabWrapper aria-labelledby="payments-tab" id="payments-view">
    <PaymentsViewWrapper>
      <PaymentsList paymentsData={paymentsData} />
    </PaymentsViewWrapper>
  </TabWrapper>
);

PaymentsView.propTypes = { paymentsData: T.array.isRequired };

export default PaymentsView;
