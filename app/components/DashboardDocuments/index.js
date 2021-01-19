/**
 * DashboardDocuments
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { MailIcon } from 'images/icons';
import { appColorA } from 'styleConstants';

const Icon = <MailIcon colorA="black" colorB={appColorA} size="4rem" />;

const DashboardDocuments = () => (
  <GradientCard heading="Documents" Icon={Icon}>
    <div>yooo</div>
  </GradientCard>
);

// DashboardDocuments.propTypes = {};

export default DashboardDocuments;
