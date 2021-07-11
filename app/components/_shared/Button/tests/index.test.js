import React from 'react';
import { render } from 'react-testing-library';

import Button from '../index';

const mockProps = { onClick: jest.fn(), text: 'text' };

const Component = <Button {...mockProps} />;

describe('<Button />', () => {
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
