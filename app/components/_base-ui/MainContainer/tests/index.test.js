import React from 'react';
import { render } from 'react-testing-library';

import MainContainer from '../index';

describe('<MainContainer />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<MainContainer />);
    expect(spy).not.toHaveBeenCalled();
  });
});
