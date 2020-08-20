import React from 'react';
import { render } from 'react-testing-library';

import TableHeadBorder from '../index';

describe('<TableHeadBorder />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TableHeadBorder />);
    expect(spy).not.toHaveBeenCalled();
  });
});
