import React from 'react';

import { Container } from './styledComponents';
import PaymentsView from './PaymentsView';
import MOCK_DATA from './mockData';

const PaymentsListSandbox = () => (
  <Container>
    <PaymentsView
      dispatchFetchPaymentsData={() => null}
      lastSortCol="date"
      lastSortOrder="desc"
      paymentsData={MOCK_DATA}
      sortLoading={false}
    />
  </Container>
);

export default PaymentsListSandbox;
