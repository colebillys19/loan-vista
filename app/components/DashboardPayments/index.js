/**
 * DashboardPayments
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { CashIcon } from 'images/icons';
import { appColorA } from 'styleConstants';

const Icon = <CashIcon colorA="black" colorB={appColorA} size="4rem" />;

const DashboardPayments = () => (
  <GradientCard heading="Payments" Icon={Icon}>
    <div>yooo</div>
  </GradientCard>
);

// DashboardPayments.propTypes = {};

export default DashboardPayments;
