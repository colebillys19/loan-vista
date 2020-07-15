import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';
import { Home } from '../index';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const WrappedHome = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home {...props} />
    </ConnectedRouter>
  </Provider>
);

describe('<Home />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedHome dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<WrappedHome />);
    expect(firstChild).toMatchSnapshot();
  });
});
