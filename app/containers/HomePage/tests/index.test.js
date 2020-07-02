import React from 'react';
import { render } from 'react-testing-library';

import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<HomePage dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<HomePage />);
    expect(firstChild).toMatchSnapshot();
  });
});
