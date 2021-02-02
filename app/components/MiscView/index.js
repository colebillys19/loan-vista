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

const MiscView = () => {
  const renderLoading = false;

  return (
    <TabContainer aria-labelledby="misc-tab" id="misc-view">
      <MiscEscrow renderLoading={renderLoading} />
      <MiscTaxes renderLoading={renderLoading} />
      <MiscHomeowners renderLoading={renderLoading} />
      <MiscMortgage renderLoading={renderLoading} />
    </TabContainer>
  );
};

MiscView.propTypes = {
  // error: T.oneOfType([T.bool, T.string]).isRequired,
  // loading: T.bool.isRequired,
  // miscEscrowData: T.array,
  // miscHomeownersData: T.array,
  // miscMortgageData: T.array,
  // miscTaxesData: T.array,
};

export default MiscView;
