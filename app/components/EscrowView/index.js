/**
 * EscrowView
 * @description ...
 */

import React from 'react';
// import PropTypes from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { EscrowViewWrapper } from './styledComponents';

const EscrowView = () => (
  <TabWrapper aria-labelledby="escrow-tab" id="escrow-view">
    <EscrowViewWrapper>EscrowView</EscrowViewWrapper>
  </TabWrapper>
);

EscrowView.propTypes = {};

export default EscrowView;
