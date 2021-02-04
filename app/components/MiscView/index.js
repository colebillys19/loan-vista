/**
 * MiscView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import MiscEscrow from 'components/MiscEscrow';
import MiscHomeowners from 'components/MiscHomeowners';
import MiscMortgage from 'components/MiscMortgage';
import MiscTaxes from 'components/MiscTaxes';
import TabContainer from 'components/_base-ui/TabContainer';

const MiscView = ({
  error,
  loading,
  miscEscrowData,
  miscHomeownersData,
  miscMortgageData,
  miscTaxesData,
}) => {
  const renderLoading = !!error || loading;

  return (
    <TabContainer aria-labelledby="misc-tab" id="misc-view">
      <MiscEscrow data={miscEscrowData} renderLoading={renderLoading} />
      <MiscTaxes data={miscTaxesData} renderLoading={renderLoading} />
      <MiscHomeowners data={miscHomeownersData} renderLoading={renderLoading} />
      <MiscMortgage data={miscMortgageData} renderLoading={renderLoading} />
    </TabContainer>
  );
};

MiscView.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  miscEscrowData: T.array.isRequired,
  miscHomeownersData: T.array.isRequired,
  miscMortgageData: T.array.isRequired,
  miscTaxesData: T.array.isRequired,
};

export default MiscView;
