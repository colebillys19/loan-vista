/**
 * DashboardList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

const DashboardList = ({ children }) => (
  <div style={{ marginBottom: '3rem' }}>
    <div>DashboardList</div>
    <div style={{ paddingLeft: '1rem' }}>{children}</div>
  </div>
);

DashboardList.propTypes = { children: T.node };

export default DashboardList;
