/**
 * TabView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListFilter from 'containers/ListFilter';
import TabContainer from 'components/_base-ui/TabContainer';

const TabView = ({ Container, id }) => (
  <TabContainer aria-labelledby={`${id}-tab`} id={`${id}-view`}>
    <ListFilter tabId={id} />
    <Container />
  </TabContainer>
);

TabView.propTypes = {
  Container: T.object.isRequired,
  id: T.string.isRequired,
};

export default TabView;
