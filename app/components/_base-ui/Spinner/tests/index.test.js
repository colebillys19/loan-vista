import React from 'react';
import { render } from 'react-testing-library';

import Spinner from '../index';

describe('<Spinner />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Spinner />);
    expect(spy).not.toHaveBeenCalled();
  });
});
