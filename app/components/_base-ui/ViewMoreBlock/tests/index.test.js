import React from 'react';
import { render } from 'react-testing-library';

import LinkButton from '../index';

const mockProps = { isActive: true, route: '/calls' };

const Component = <LinkButton {...mockProps} />;

describe('<LinkButton />', () => {
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
