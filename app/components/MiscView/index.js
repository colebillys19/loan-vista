/**
 * MiscView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/_base-ui/TabWrapper';

const MiscView = () => (
  <TabWrapper aria-labelledby="misc-tab" id="misc-view">
    <div style={{ padding: '1rem' }}>HomeView</div>
  </TabWrapper>
);

MiscView.propTypes = {
  // error: T.oneOfType([T.bool, T.object]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default MiscView;
