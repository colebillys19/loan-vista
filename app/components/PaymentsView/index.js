/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import ListFilter from 'containers/ListFilter';
// import Payments from 'containers/Payments';

import TabContainer from 'components/_base-ui/TabContainer';

const PaymentsView = () => (
  <TabContainer aria-labelledby="payments-tab" id="payments-view">
    <ListFilter />
    {/* <Payments /> */}
  </TabContainer>
);

// PaymentsView.propTypes = {};

export default PaymentsView;
