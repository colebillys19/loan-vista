import React from 'react';
import { render } from 'react-testing-library';

import CallsList from '../index';

import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = {
  callsData: MOCK_DATA,
  headers: MOCK_HEADERS,
  sortAsc: true,
  sortColumn: 'date',
};

const Component = <CallsList {...mockProps} />;

describe('<CallsList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
