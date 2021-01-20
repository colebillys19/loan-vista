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
import TabContainer from 'components/_base-ui/TabContainer';

const MiscView = () => (
  <TabContainer aria-labelledby="misc-tab" id="misc-view">
    <MiscEscrow />
    <MiscTaxes />
    <MiscHomeowners />
    <MiscMortgage />
  </TabContainer>
);

MiscView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // pathname: T.string.isRequired,
};

export default MiscView;
