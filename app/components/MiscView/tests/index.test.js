import React from 'react';
import { render } from 'react-testing-library';

import MiscView from '../index';

import {
  MOCK_ESCROW_DATA as miscEscrowData,
  MOCK_HOMEOWNERS_DATA as miscHomeownersData,
  MOCK_MORTGAGE_DATA as miscMortgageData,
  MOCK_TAXES_DATA as miscTaxesData,
} from './mockData';

const mockProps = {
  error: false,
  loading: false,
  miscEscrowData,
  miscHomeownersData,
  miscMortgageData,
  miscTaxesData,
};

const Component = <MiscView {...mockProps} />;

describe('<MiscView />', () => {
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
