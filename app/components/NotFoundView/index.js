/**
 * NotFoundView
 * @description ...
 */

import React from 'react';

import TabWrapper from 'components/_base-ui/TabWrapper';
import { WarningIcon } from 'images/icons';

import { NotFoundViewWrapper, WarningHeading } from './styledComponents';

const NotFoundView = () => (
  <TabWrapper>
    <NotFoundViewWrapper>
      <WarningIcon size="8rem" />
      <WarningHeading>page not found</WarningHeading>
    </NotFoundViewWrapper>
  </TabWrapper>
);

export default NotFoundView;
