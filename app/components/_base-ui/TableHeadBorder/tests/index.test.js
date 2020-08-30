import React from 'react';
import { render } from 'react-testing-library';

import TableHeadBorder from '../index';

const mockProps = { hideBottom: false };

const Component = <TableHeadBorder {...mockProps} />;

describe('<TableHeadBorder />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
