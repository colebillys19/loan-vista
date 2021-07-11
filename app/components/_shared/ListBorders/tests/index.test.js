import React from 'react';
import { render } from 'react-testing-library';

import ListBorders from '../index';

const Component = <ListBorders />;

describe('<ListBorders />', () => {
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
