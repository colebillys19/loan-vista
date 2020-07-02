/**
 * PaymentsView
 * @description ...
 */

import React from 'react';
// import PropTypes from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { PaymentsViewWrapper } from './styledComponents';

const PaymentsView = () => (
  <TabWrapper aria-labelledby="payments-tab" id="payments-view">
    <PaymentsViewWrapper>PaymentsView</PaymentsViewWrapper>
  </TabWrapper>
);

PaymentsView.propTypes = {};

export default PaymentsView;
