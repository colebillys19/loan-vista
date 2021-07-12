import React from 'react';
import { render } from 'react-testing-library';

import DashboardCalls from '../index';
import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const Component = (
  <DashboardCalls
    data={{ data: MOCK_DATA, listHeaders: MOCK_HEADERS }}
    dispatchNavigation={jest.fn()}
    renderLoading={false}
  />
);
const ComponentLoading = (
  <DashboardCalls
    data={{ data: [], listHeaders: MOCK_HEADERS }}
    dispatchNavigation={jest.fn()}
    renderLoading
  />
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

describe('<DashboardCalls /> loading state', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(ComponentLoading);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(ComponentLoading);
    expect(container.firstChild).toBeDefined();
  });
});
