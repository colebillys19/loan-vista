import React from 'react';
import { render } from 'react-testing-library';

import { ContextProvider } from 'Context';

import DashboardCalls from '../index';
import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const Component = (
  <ContextProvider>
    <DashboardCalls
      data={{
        data: MOCK_DATA,
        formattedHeaders: MOCK_HEADERS,
        listHeaders: MOCK_HEADERS,
      }}
      dispatchNavigation={jest.fn()}
    />
  </ContextProvider>
);

describe('<DashboardCalls />', () => {
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
