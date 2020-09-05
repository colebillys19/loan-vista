import React from 'react';
import { render } from 'react-testing-library';

import PaymentsList from '../index';

import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = {
  paymentsData: MOCK_DATA,
  headers: MOCK_HEADERS,
  sortAsc: true,
  sortColumn: 'date',
};

const Component = <PaymentsList {...mockProps} />;

describe('<PaymentsList />', () => {
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
