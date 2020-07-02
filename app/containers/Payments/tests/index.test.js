import React from 'react';
import { render } from 'react-testing-library';

import { Payments } from '../index';

describe('<Payments />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Payments dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Payments />);
    expect(firstChild).toMatchSnapshot();
  });
});
