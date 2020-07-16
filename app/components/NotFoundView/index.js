/**
 * NotFoundView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { NotFoundViewWrapper } from './styledComponents';

const NotFoundView = () => (
  <TabWrapper aria-labelledby="misc-tab" id="misc-view">
    <NotFoundViewWrapper>NotFoundView</NotFoundViewWrapper>
  </TabWrapper>
);

NotFoundView.propTypes = {};

export default NotFoundView;
