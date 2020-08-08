import React from 'react';
import { render } from 'react-testing-library';

import PhantomTabNav from '../index';

const mockProps = { pathname: 'pathname' };

const Component = <PhantomTabNav {...mockProps} />;

describe('<PhantomTabNav />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
