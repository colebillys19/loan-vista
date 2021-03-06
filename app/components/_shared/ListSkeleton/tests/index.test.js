import React from 'react';
import { render } from 'react-testing-library';

import ListSkeleton from '../index';

const mockProps = { numRows: 1 };

const Component = <ListSkeleton {...mockProps} />;

describe('<ListSkeleton />', () => {
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
