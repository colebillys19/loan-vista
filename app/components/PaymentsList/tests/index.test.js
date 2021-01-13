import React from 'react';
import { render } from 'react-testing-library';

import PaymentsList from '../index';

import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = {
  dispatchFetchPaymentsData: jest.fn(),
  headers: MOCK_HEADERS,
  paymentsData: MOCK_DATA,
  sortLoading: false,
  sortValues: { sortCol: '', sortOrder: '' },
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
