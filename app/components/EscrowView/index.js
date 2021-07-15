/**
 * EscrowView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import EscrowEscrow from 'components/EscrowEscrow';
import EscrowHomeowners from 'components/EscrowHomeowners';
import EscrowMortgage from 'components/EscrowMortgage';
import EscrowTaxes from 'components/EscrowTaxes';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ErrorModal from 'components/_shared/ErrorModal';
import TabContainer from 'components/_shared/TabContainer';

const EscrowView = ({
  error,
  escrowEscrowData,
  escrowHomeownersData,
  escrowMortgageData,
  escrowTaxesData,
}) => (
  <TabContainer aria-labelledby="escrow-tab" id="escrow-view">
    <EscrowEscrow data={escrowEscrowData} />
    <EscrowTaxes data={escrowTaxesData} />
    <EscrowHomeowners data={escrowHomeownersData} />
    <EscrowMortgage data={escrowMortgageData} />
    <ConditionalRender
      Component={ErrorModal}
      propsToPassDown={{ error }}
      shouldRender={!!error}
    />
  </TabContainer>
);

EscrowView.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  escrowEscrowData: T.object.isRequired,
  escrowHomeownersData: T.array.isRequired,
  escrowMortgageData: T.array.isRequired,
  escrowTaxesData: T.array.isRequired,
};

export default EscrowView;
