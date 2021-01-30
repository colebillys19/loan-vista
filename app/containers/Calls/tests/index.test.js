import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';

import { Calls } from '../index';
import { MOCK_DATA } from './mockData';

const initialState = {};
const store = configureStore(initialState, history);

const mockProps = {
  callsData: MOCK_DATA,
  dispatchFetchCallsData: jest.fn(),
  dispatchOnUnmount: jest.fn(),
  dispatchSetLoadingTrue: jest.fn(),
  error: false,
  fetchParams: {},
  loading: false,
  loanNumber: '1234567890',
  mainError: false,
  noDataFetched: false,
  pathname: '',
  sortLoading: false,
  sortValues: {},
};

const WrappedCalls = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Calls {...props} {...mockProps} />
    </ConnectedRouter>
  </Provider>
);

describe('<Calls />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedCalls dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const dispatch = jest.fn();
    const { container } = render(<WrappedCalls dispatch={dispatch} />);
    expect(container.firstChild).toBeDefined();
  });
});
