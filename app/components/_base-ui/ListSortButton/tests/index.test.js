import React from 'react';
import { render } from 'react-testing-library';

import ListSortButton from '../index';

const mockProps = {
  isActive: true,
  isAscending: true,
  onClick: jest.fn(),
  text: 'text',
};

const Component = <ListSortButton {...mockProps} />;

describe('<ListSortButton />', () => {
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
