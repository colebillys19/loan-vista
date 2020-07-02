import React from 'react';
import { render } from 'react-testing-library';

import { Emails } from '../index';

describe('<Emails />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Emails dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Emails />);
    expect(firstChild).toMatchSnapshot();
  });
});
