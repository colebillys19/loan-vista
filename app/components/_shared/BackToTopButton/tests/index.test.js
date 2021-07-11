import React from 'react';
import { render } from 'react-testing-library';

import BackToTopButton from '../index';

const Component = <BackToTopButton />;

describe('<BackToTopButton />', () => {
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
