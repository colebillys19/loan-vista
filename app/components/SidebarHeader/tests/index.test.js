import React from 'react';
import { render } from 'react-testing-library';

import SidebarHeader from '../index';

const mockProps = {
  pathname: '/',
  sidebarHeaderData: {
    address1: 'address1',
    address2: 'address2',
    health: 0,
    loanNumber: 'loanNumber',
    name: 'name',
  },
};

const Component = <SidebarHeader {...mockProps} />;

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
