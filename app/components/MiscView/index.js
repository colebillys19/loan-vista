/**
 * MiscView
 * @description ...
 */

import React from 'react';
// import PropTypes from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { MiscViewWrapper } from './styledComponents';

const MiscView = () => (
  <TabWrapper aria-labelledby="misc-tab" id="misc-view">
    <MiscViewWrapper>MiscView</MiscViewWrapper>
  </TabWrapper>
);

MiscView.propTypes = {};

export default MiscView;
