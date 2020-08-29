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
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
