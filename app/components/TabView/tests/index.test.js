import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';

import TabView from '../index';

const initialState = {};
const store = configureStore(initialState, history);

const mockProps = { Container: <div />, id: 'calls' };

const WrappedTabView = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TabView {...props} {...mockProps} />
    </ConnectedRouter>
  </Provider>
);

describe('<TabView />', () => {
  // it('Expect not to log errors in console', () => {
  //   const spy = jest.spyOn(global.console, 'error');
  //   render(WrappedTabView);
  //   expect(spy).not.toHaveBeenCalled();
  // });

  it('Expect to render', () => {
    const { container } = render(WrappedTabView);
    expect(container.firstChild).toBeDefined();
  });
});
