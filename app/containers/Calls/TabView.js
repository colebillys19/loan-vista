/**
 * TabView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import Calls from 'containers/Calls';
import ListFilter from 'containers/ListFilter';

import TabContainer from 'components/_base-ui/TabContainer';

const TabView = () => (
  <TabContainer aria-labelledby="calls-tab" id="calls-view">
    <ListFilter />
    <Calls />
  </TabContainer>
);

// TabView.propTypes = {};

export default TabView;
