/**
 * NotFoundView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import TabWrapper from 'components/TabWrapper';
import iconDictionary from 'utils/iconDictionary';

import { NotFoundViewWrapper, WarningHeading } from './styledComponents';

const WarningIcon = iconDictionary('warning', '12rem');

const NotFoundView = () => (
  <TabWrapper>
    <NotFoundViewWrapper>
      {WarningIcon}
      <WarningHeading>Page Not Found</WarningHeading>
    </NotFoundViewWrapper>
  </TabWrapper>
);

NotFoundView.propTypes = {};

export default NotFoundView;
