/**
 * NotFoundView
 * @description ...
 */

import React from 'react';

import TabWrapper from 'components/TabWrapper';
import { WarningIcon } from 'images/icons';

import { NotFoundViewWrapper, WarningHeading } from './styledComponents';

const NotFoundView = () => (
  <TabWrapper>
    <NotFoundViewWrapper>
      <WarningIcon size="12rem" />
      <WarningHeading>page not found</WarningHeading>
    </NotFoundViewWrapper>
  </TabWrapper>
);

export default NotFoundView;
