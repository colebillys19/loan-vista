/**
 * HomeView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/_base-ui/TabWrapper';

const HomeView = () => (
  <TabWrapper aria-labelledby="home-button" id="home-view">
    <div style={{ padding: '1rem' }}>HomeView</div>
  </TabWrapper>
);

HomeView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default HomeView;
