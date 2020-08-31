import React from 'react';
import { render } from 'react-testing-library';

import TextField from '../TextField';

describe('<TextField />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TextField />);
    expect(spy).not.toHaveBeenCalled();
  });
});
