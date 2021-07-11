import React from 'react';
import { render } from 'react-testing-library';

import ConditionalRender from '../index';

const mockProps = { Component: <div>test</div>, shouldRender: true };

const Component = <ConditionalRender {...mockProps} />;

describe('<ConditionalRender />', () => {
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
