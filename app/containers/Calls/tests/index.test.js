import React from 'react';
import { render } from 'react-testing-library';

import { Calls } from '../index';

describe('<Calls />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Calls dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Calls />);
    expect(firstChild).toMatchSnapshot();
  });
});
