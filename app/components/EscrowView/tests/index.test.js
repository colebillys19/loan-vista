import React from 'react';
import { render } from 'react-testing-library';

import { ContextProvider } from 'Context';

import EscrowView from '../index';

import {
  MOCK_ESCROW_DATA as escrowEscrowData,
  MOCK_HOMEOWNERS_DATA as escrowHomeownersData,
  MOCK_MORTGAGE_DATA as escrowMortgageData,
  MOCK_TAXES_DATA as escrowTaxesData,
} from './mockData';

const mockProps = {
  error: false,
  escrowEscrowData,
  escrowHomeownersData,
  escrowMortgageData,
  escrowTaxesData,
};

const Component = (
  <ContextProvider>
    <EscrowView {...mockProps} />
  </ContextProvider>
);

describe('<EscrowView />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
