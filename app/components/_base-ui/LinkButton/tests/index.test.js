import React from 'react';
import { render } from 'react-testing-library';

import LinkButton from '../index';

describe('<LinkButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<LinkButton />);
    expect(spy).not.toHaveBeenCalled();
  });
});
