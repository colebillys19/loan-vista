import React from 'react';
import { render } from 'react-testing-library';

import Button from '../index';

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Button />);
    expect(spy).not.toHaveBeenCalled();
  });
});
