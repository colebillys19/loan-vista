import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';
import { Documents } from '../index';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const WrappedDocuments = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Documents {...props} />
    </ConnectedRouter>
  </Provider>
);

describe('<Documents />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedDocuments dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<WrappedDocuments />);
    expect(firstChild).toMatchSnapshot();
  });
});
