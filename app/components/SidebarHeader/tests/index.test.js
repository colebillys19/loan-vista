import React from 'react';
import { render } from 'react-testing-library';

import SidebarHeader from '../index';

const mockProps = { pathname: 'pathname' };

const Component = <SidebarHeader {...mockProps} />;

describe('<SidebarHeader />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
