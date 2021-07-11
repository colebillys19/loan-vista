/**
 * NotFoundView
 * @description ...
 */

import React from 'react';

import TabContainer from 'components/_shared/TabContainer';
import { WarningIcon } from 'images/iconComponents';

import { NotFoundViewContainer, WarningHeading } from './styledComponents';

const NotFoundView = () => (
  <TabContainer>
    <NotFoundViewContainer>
      <WarningIcon size="8rem" />
      <WarningHeading>page not found</WarningHeading>
    </NotFoundViewContainer>
  </TabContainer>
);

export default NotFoundView;
