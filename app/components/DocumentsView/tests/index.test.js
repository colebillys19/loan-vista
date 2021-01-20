import React from 'react';
import { render } from 'react-testing-library';

import DocumentsView from '../index';
import { MOCK_DATA } from './mockData';

const mockProps = {
  dispatchFetchDocumentsData: jest.fn(),
  documentsData: MOCK_DATA,
  error: false,
  fetchParams: {},
  loading: false,
  sortLoading: false,
  sortValues: {},
};

const Component = <DocumentsView {...mockProps} />;

describe('<DocumentsView />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
