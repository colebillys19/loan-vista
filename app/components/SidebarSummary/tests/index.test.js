import React from 'react';
import { render } from 'react-testing-library';

import SidebarSummary from '../index';

describe('<SidebarSummary />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SidebarSummary />);
    expect(spy).not.toHaveBeenCalled();
  });
});
