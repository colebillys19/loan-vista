import React from 'react';
import { render } from 'react-testing-library';

import ListFallback from '../index';

const mockProps = { loading: false };

const Component = <ListFallback {...mockProps} />;

describe('<ListFallback />', () => {
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
