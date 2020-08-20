/**
 * HomeView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/_base-ui/TabWrapper';
import Placeholder from 'components/_base-ui/Placeholder';

const HomeView = () => (
  <TabWrapper aria-labelledby="home-button" id="home-view">
    <Placeholder height="50rem" />
  </TabWrapper>
);

// HomeView.propTypes = {};

export default HomeView;
