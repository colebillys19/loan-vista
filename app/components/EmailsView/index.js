/**
 * EmailsView
 * @description ...
 */

import React from 'react';
// import PropTypes from 'prop-types';

import TabWrapper from 'components/TabWrapper';

import { EmailsViewWrapper } from './styledComponents';

const EmailsView = () => (
  <TabWrapper aria-labelledby="emails-tab" id="emails-view">
    <EmailsViewWrapper>EmailsView</EmailsViewWrapper>
  </TabWrapper>
);

EmailsView.propTypes = {};

export default EmailsView;
