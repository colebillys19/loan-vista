import React from 'react';
import { render } from 'react-testing-library';

import SidebarSummary from '../index';

describe('<SidebarSummary />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SidebarSummary />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<SidebarSummary />);
    expect(firstChild).toMatchSnapshot();
  });
});
