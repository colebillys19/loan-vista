import React from 'react';
import { render } from 'react-testing-library';

import TextField from '../TextField';

const mockProps = {};

const Component = <TextField {...mockProps} />;

describe('<TextField />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
