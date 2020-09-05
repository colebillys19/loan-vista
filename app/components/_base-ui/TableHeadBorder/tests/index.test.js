import React from 'react';
import { render } from 'react-testing-library';

import TableHeadBorder from '../index';

const mockProps = { hideBottom: false };

const Component = <TableHeadBorder {...mockProps} />;

describe('<TableHeadBorder />', () => {
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
