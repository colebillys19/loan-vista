import React from 'react';
import { render } from 'react-testing-library';

import DashboardPayments from '../index';
import { MOCK_DATA } from './mockData';

const Component = (
  <DashboardPayments
    data={MOCK_DATA}
    dispatchNavigation={jest.fn()}
    renderLoading={false}
  />
);
const ComponentLoading = (
  <DashboardPayments data={[]} dispatchNavigation={jest.fn()} renderLoading />
);

describe('<DashboardPayments />', () => {
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

describe('<DashboardPayments /> loading state', () => {
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
