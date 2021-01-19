/**
 * DashboardCalls
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { CallIcon } from 'images/icons';
import { appColorA } from 'styleConstants';

const Icon = <CallIcon colorA="black" colorB={appColorA} size="4rem" />;

const DashboardCalls = () => (
  <GradientCard heading="Calls" Icon={Icon}>
    <div>yooo</div>
  </GradientCard>
);

// DashboardCalls.propTypes = {};

export default DashboardCalls;
