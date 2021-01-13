import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';
import { Main } from '../index';

const initialState = {};
const store = configureStore(initialState, history);

const mockProps = {
  dispatchFetchLoanData: jest.fn(),
  error: false,
  loading: false,
  loanNumber: '',
  pathname: '',
  render: () => <div />,
  sidebarHeaderData: {},
  sidebarSummariesData: {},
};

const WrappedMain = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main {...props} {...mockProps} />
    </ConnectedRouter>
  </Provider>
);

describe('<Main />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedMain dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const dispatch = jest.fn();
    const { container } = render(<WrappedMain dispatch={dispatch} />);
    expect(container.firstChild).toBeDefined();
  });
});
