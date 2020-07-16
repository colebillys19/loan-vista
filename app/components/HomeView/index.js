/**
 * HomeView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { HomeViewWrapper } from './styledComponents';

const HomeView = () => (
  <TabWrapper aria-labelledby="home-button" id="home-view">
    <HomeViewWrapper>HomeView</HomeViewWrapper>
  </TabWrapper>
);

HomeView.propTypes = {};

export default HomeView;
