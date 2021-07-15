import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';

import Payments from '../index';
import { MOCK_DATA } from './mockData';

const initialState = {};
const store = configureStore(initialState, history);

const mockProps = {
  dispatchFetchPaymentsData: jest.fn(),
  error: false,
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  mainError: false,
  nextPageToFetch: 1,
  paymentsData: MOCK_DATA,
  scrollLoading: false,
  sortLoading: false,
};

const WrappedPayments = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Payments {...props} {...mockProps} />
    </ConnectedRouter>
  </Provider>
);

describe('<Payments />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedPayments dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const dispatch = jest.fn();
    const { container } = render(<WrappedPayments dispatch={dispatch} />);
    expect(container.firstChild).toBeDefined();
  });
});
