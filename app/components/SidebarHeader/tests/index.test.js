import React from 'react';
import { render } from 'react-testing-library';

import SidebarHeader from '../index';

const Component = (
  <SidebarHeader
    error={false}
    pathname="/"
    sidebarHeaderData={{
      address1: 'address1',
      address2: 'address2',
      loanNumber: 'loanNumber',
      name: 'name',
    }}
  />
);

describe('<SidebarHeader />', () => {
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
