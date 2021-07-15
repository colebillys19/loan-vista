import React from 'react';
import { render } from 'react-testing-library';

import DashboardDocuments from '../index';
import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const Component = (
  <DashboardDocuments
    data={{ data: MOCK_DATA, listHeaders: MOCK_HEADERS }}
    dispatchNavigation={jest.fn()}
  />
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
