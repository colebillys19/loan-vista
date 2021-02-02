import React from 'react';
import { render } from 'react-testing-library';

import MiscView from '../index';

const mockProps = {
  miscEscrowData: [
    {
      listData: [{ label: 'label', value: 'value' }],
    },
  ],
  miscHomeownersData: [
    {
      annualPremium: 'annualPremium',
      company: 'company',
      id: '1',
      insuranceType: 'insuranceType',
      policyExpiration: 'policyExpiration',
      policyType: 'policyType',
    },
  ],
  miscMortgageData: [
    {
      company: 'company',
      id: '1',
      insuranceId: 'insuranceId',
      premiumAmount: 'premiumAmount',
      premiumDue: 'premiumDue',
    },
  ],
  miscTaxesData: [
    {
      expectedAmount: 'expectedAmount',
      id: '1',
      nextDue: 'nextDue',
      paidTo: 'paidTo',
      payFrequency: 'payFrequency',
      taxId: 'taxId',
      taxType: 'taxType',
    },
  ],
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
