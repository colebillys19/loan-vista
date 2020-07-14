import React from 'react';
import { render } from 'react-testing-library';

import SidebarHeader from '../index';

describe('<SidebarHeader />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SidebarHeader />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<SidebarHeader />);
    expect(firstChild).toMatchSnapshot();
  });
});
