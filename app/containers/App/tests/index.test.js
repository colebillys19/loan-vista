import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';

import configureStore from 'configureStore';
import history from 'utils/history';

import App from '../index';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const WrappedApp = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App {...props} />
    </ConnectedRouter>
  </Provider>
);

const renderer = new ShallowRenderer();

describe('<App />', () => {
  it.skip('Should render and match the snapshot', () => {
    renderer.render(<WrappedApp />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
