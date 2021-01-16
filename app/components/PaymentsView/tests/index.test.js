import React from 'react';
import { render } from 'react-testing-library';

import PaymentsView from '../index';

import { MOCK_DATA } from './mockData';

const mockProps = {
  dispatchFetchPaymentsData: jest.fn(),
  error: false,
  fetchParams: {},
  loading: false,
  paymentsData: MOCK_DATA,
  sortLoading: false,
  sortValues: {},
};

const Component = <PaymentsView {...mockProps} />;

describe('<PaymentsView />', () => {
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
