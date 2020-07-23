import React from 'react';
import { render } from 'react-testing-library';

import SidebarContent from '../index';

const mockProps = { pathname: 'pathname' };

const Component = <SidebarContent {...mockProps} />;

describe('<SidebarContent />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
