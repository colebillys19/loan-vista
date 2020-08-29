import React from 'react';
import { render } from 'react-testing-library';

import DocumentsList from '../index';

import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = {
  documentsData: MOCK_DATA,
  headers: MOCK_HEADERS,
  sortAsc: true,
  sortColumn: 'date sent',
};

const Component = <DocumentsList {...mockProps} />;

describe('<DocumentsList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
