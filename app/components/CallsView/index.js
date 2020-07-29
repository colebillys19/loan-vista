/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CallsList from 'components/CallsList';
import TabWrapper from 'components/TabWrapper';

import { CallsViewWrapper } from './styledComponents';

const CallsView = ({ callsData }) => (
  <TabWrapper aria-labelledby="calls-tab" id="calls-view">
    <CallsViewWrapper>
      <CallsList callsData={callsData} />
    </CallsViewWrapper>
  </TabWrapper>
);

CallsView.propTypes = { callsData: T.array.isRequired };

export default CallsView;
