import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';

import App from '../index';

const initialState = {};
const store = configureStore(initialState, history);

const WrappedApp = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App {...props} />
    </ConnectedRouter>
  </Provider>
);

describe('<App />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedApp dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const dispatch = jest.fn();
    const { container } = render(<WrappedApp dispatch={dispatch} />);
    expect(container.firstChild).toBeDefined();
  });
});
