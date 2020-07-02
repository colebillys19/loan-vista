/**
 * CallsView
 * @description ...
 */

import React from 'react';
// import PropTypes from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { CallsViewWrapper } from './styledComponents';

const CallsView = () => (
  <TabWrapper aria-labelledby="calls-tab" id="calls-view">
    <CallsViewWrapper>CallsView</CallsViewWrapper>
  </TabWrapper>
);

CallsView.propTypes = {};

export default CallsView;
