import React from 'react';
import { render } from 'react-testing-library';

import DashboardDocuments from '../index';
import { MOCK_DATA } from './mockData';

const Component = (
  <DashboardDocuments
    data={MOCK_DATA}
    dispatchNavigation={jest.fn()}
    renderLoading={false}
  />
);
const ComponentLoading = (
  <DashboardDocuments data={[]} dispatchNavigation={jest.fn()} renderLoading />
);

describe('<DashboardDocuments />', () => {
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

describe('<DashboardDocuments /> loading state', () => {
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
