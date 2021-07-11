/**
 * EscrowView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ErrorModal from 'components/_shared/ErrorModal';
import EscrowEscrow from 'components/EscrowEscrow';
import EscrowHomeowners from 'components/EscrowHomeowners';
import EscrowMortgage from 'components/EscrowMortgage';
import EscrowTaxes from 'components/EscrowTaxes';
import TabContainer from 'components/_shared/TabContainer';

const EscrowView = ({
  error,
  escrowEscrowData,
  escrowHomeownersData,
  escrowMortgageData,
  escrowTaxesData,
  loading,
  loanNumber,
}) => {
  const renderLoading = !loanNumber || error || loading;

  return (
    <TabContainer aria-labelledby="escrow-tab" id="escrow-view">
      <EscrowEscrow data={escrowEscrowData} renderLoading={renderLoading} />
      <EscrowTaxes data={escrowTaxesData} renderLoading={renderLoading} />
      <EscrowHomeowners
        data={escrowHomeownersData}
        renderLoading={renderLoading}
      />
      <EscrowMortgage data={escrowMortgageData} renderLoading={renderLoading} />
      <ErrorModal error={error} />
    </TabContainer>
  );
};

EscrowView.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  escrowEscrowData: T.object.isRequired,
  escrowHomeownersData: T.array.isRequired,
  escrowMortgageData: T.array.isRequired,
  escrowTaxesData: T.array.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
};

export default EscrowView;
