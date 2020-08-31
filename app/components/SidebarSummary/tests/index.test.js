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
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
