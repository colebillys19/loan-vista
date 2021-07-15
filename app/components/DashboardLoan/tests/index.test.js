import React from 'react';
import { render } from 'react-testing-library';

import DashboardLoan from '../index';
import {
  MOCK_BALANCES_DATA,
  MOCK_PAYMENT_DATA,
  MOCK_STOPS_DATA,
} from './mockData';

const Component = (
  <DashboardLoan
    data={{
      balancesData: MOCK_BALANCES_DATA,
      paymentData: MOCK_PAYMENT_DATA,
      stopsData: MOCK_STOPS_DATA,
    }}
  />
);

describe('<DashboardLoan />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });
});
