/**
 * MiscView
 * @description ...
 */

import React from 'react';
// import T from 'prop-types';

import MiscEscrow from 'components/MiscEscrow';
import MiscHomeowners from 'components/MiscHomeowners';
import MiscMortgage from 'components/MiscMortgage';
import MiscTaxes from 'components/MiscTaxes';
import TabWrapper from 'components/_base-ui/TabWrapper';

const MiscView = () => (
  <TabWrapper aria-labelledby="misc-tab" id="misc-view">
    <div style={{ outline: '1px solid green' }}>
      <MiscEscrow />
      <MiscTaxes />
      <MiscHomeowners />
      <MiscMortgage />
    </div>
  </TabWrapper>
);

MiscView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default MiscView;
