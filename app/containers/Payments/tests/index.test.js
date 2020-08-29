import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';
import { Payments } from '../index';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const WrappedPayments = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Payments {...props} />
    </ConnectedRouter>
  </Provider>
);

describe('<Payments />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedPayments dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<WrappedPayments />);
    expect(firstChild).toMatchSnapshot();
  });
});
