import React from 'react';
import { render } from 'react-testing-library';

import SidebarSummary from '../index';

const mockProps = {
  data: [{ label: 'label', value: 'value' }],
  health: 0,
  title: 'title',
};

const Component = <SidebarSummary {...mockProps} />;

describe('<SidebarSummary />', () => {
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
