/**
 * EscrowView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ErrorModal from 'components/_base-ui/ErrorModal';
import EscrowEscrow from 'components/EscrowEscrow';
import EscrowHomeowners from 'components/EscrowHomeowners';
import EscrowMortgage from 'components/EscrowMortgage';
import EscrowTaxes from 'components/EscrowTaxes';
import TabContainer from 'components/_base-ui/TabContainer';

const EscrowView = ({
  error,
  escrowEscrowData,
  escrowHomeownersData,
  escrowMortgageData,
  escrowTaxesData,
  loading,
  loanNumber,
}) => {
  const showComponents = loanNumber && !error && !loading;

  return (
    <TabContainer aria-labelledby="escrow-tab" id="escrow-view">
      <EscrowEscrow data={escrowEscrowData} renderLoading={!showComponents} />
      <EscrowTaxes data={escrowTaxesData} renderLoading={!showComponents} />
      <EscrowHomeowners
        data={escrowHomeownersData}
        renderLoading={!showComponents}
      />
      <EscrowMortgage
        data={escrowMortgageData}
        renderLoading={!showComponents}
      />
      <ErrorModal error={error} />
    </TabContainer>
  );
};

EscrowView.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  escrowEscrowData: T.array.isRequired,
  escrowHomeownersData: T.array.isRequired,
  escrowMortgageData: T.array.isRequired,
  escrowTaxesData: T.array.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
};

export default EscrowView;
