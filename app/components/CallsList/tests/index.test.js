import React from 'react';
import { render } from 'react-testing-library';

import CallsList from '../index';

import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = {
  callsData: MOCK_DATA,
  dispatchFetchCallsData: jest.fn(),
  headers: MOCK_HEADERS,
  sortLoading: false,
  sortValues: { sortCol: '', sortOrder: '' },
};

const Component = <CallsList {...mockProps} />;

describe('<CallsList />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });
});
