import React from 'react';
import { render } from 'react-testing-library';

import { Home } from '../index';

describe('<Home />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Home dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Home />);
    expect(firstChild).toMatchSnapshot();
  });
});
