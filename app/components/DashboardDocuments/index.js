/**
 * DashboardDocuments
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { MailIcon } from 'images/icons';
import { appColorAOpaque } from 'styleConstants';

const Icon = <MailIcon colorA="black" colorB={appColorAOpaque} size="4rem" />;

const DashboardDocuments = () => (
  <GradientCard heading="Documents" Icon={Icon}>
    <div>yooo</div>
  </GradientCard>
);

// DashboardDocuments.propTypes = {};

export default DashboardDocuments;
