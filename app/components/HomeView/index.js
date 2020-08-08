/**
 * HomeView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/TabWrapper';
import Placeholder from 'components/_baseUI/Placeholder';

const HomeView = () => (
  <TabWrapper aria-labelledby="home-button" id="home-view">
    <Placeholder height="50rem" />
  </TabWrapper>
);

// HomeView.propTypes = {};

export default HomeView;
