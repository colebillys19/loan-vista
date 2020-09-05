import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';
import { Calls } from '../index';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const WrappedCalls = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Calls {...props} />
    </ConnectedRouter>
  </Provider>
);

describe('<Calls />', () => {
  it.skip('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedCalls dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<WrappedCalls dispatch={jest.fn()} />);
    expect(firstChild).toMatchSnapshot();
  });
});
