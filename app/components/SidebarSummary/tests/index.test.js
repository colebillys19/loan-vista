import React from 'react';
import { render } from 'react-testing-library';

import SidebarSummary from '../index';

const Component = (
  <SidebarSummary
    data={[{ label: 'label', value: 'value' }]}
    health={0}
    numRows={1}
    title="title"
  />
);

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
