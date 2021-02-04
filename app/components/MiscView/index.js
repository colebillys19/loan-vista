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
  loanNumber,
  miscEscrowData,
  miscHomeownersData,
  miscMortgageData,
  miscTaxesData,
}) => {
  const showComponents = loanNumber && !error && !loading;

  return (
    <TabContainer aria-labelledby="misc-tab" id="misc-view">
      <MiscEscrow data={miscEscrowData} renderLoading={!showComponents} />
      <MiscTaxes data={miscTaxesData} renderLoading={!showComponents} />
      <MiscHomeowners
        data={miscHomeownersData}
        renderLoading={!showComponents}
      />
      <MiscMortgage data={miscMortgageData} renderLoading={!showComponents} />
    </TabContainer>
  );
};

MiscView.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  miscEscrowData: T.array.isRequired,
  miscHomeownersData: T.array.isRequired,
  miscMortgageData: T.array.isRequired,
  miscTaxesData: T.array.isRequired,
};

export default MiscView;
