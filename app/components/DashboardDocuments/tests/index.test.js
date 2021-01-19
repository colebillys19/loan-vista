import React from 'react';
import { render } from 'react-testing-library';

import DashboardDocuments from '../index';

const mockProps = {};

const Component = <DashboardDocuments {...mockProps} />;

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
