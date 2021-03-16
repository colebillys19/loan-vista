/**
 * CallsView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import Calls from 'containers/Calls';
import ListFilter from 'containers/ListFilter';

import TabContainer from 'components/_base-ui/TabContainer';

const CallsView = () => (
  <TabContainer aria-labelledby="calls-tab" id="calls-view">
    <ListFilter />
    <Calls />
  </TabContainer>
);

// CallsView.propTypes = {};

export default CallsView;
