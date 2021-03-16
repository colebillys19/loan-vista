/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

// import Documents from 'containers/Documents';
import ListFilter from 'containers/ListFilter';

import TabContainer from 'components/_base-ui/TabContainer';

const DocumentsView = () => (
  <TabContainer aria-labelledby="documents-tab" id="documents-view">
    <ListFilter />
    {/* <Documents /> */}
  </TabContainer>
);

// DocumentsView.propTypes = {};

export default DocumentsView;
