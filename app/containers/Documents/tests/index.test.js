import React from 'react';
import { render } from 'react-testing-library';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import history from 'utils/history';

import Documents from '../index';
import { MOCK_DATA } from './mockData';

const initialState = {};
const store = configureStore(initialState, history);

const mockProps = {
  dispatchFetchDocumentsData: jest.fn(),
  dispatchSetLoadingTrue: jest.fn(),
  documentsData: MOCK_DATA,
  error: false,
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  loanNumber: '1234567890',
  mainError: false,
  sortLoading: false,
};

const WrappedDocuments = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Documents {...props} {...mockProps} />
    </ConnectedRouter>
  </Provider>
);

describe('<Documents />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<WrappedDocuments dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const dispatch = jest.fn();
    const { container } = render(<WrappedDocuments dispatch={dispatch} />);
    expect(container.firstChild).toBeDefined();
  });
});
