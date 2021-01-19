/**
 * DashboardLoan
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { TextIcon } from 'images/icons';
import { appColorAOpaque } from 'styleConstants';

const Icon = <TextIcon color={appColorAOpaque} size="4rem" />;

const DashboardLoan = () => (
  <GradientCard heading="Loan Information" Icon={Icon}>
    <div>yooo</div>
  </GradientCard>
);

// DashboardLoan.propTypes = {};

export default DashboardLoan;
