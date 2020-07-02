import React from 'react';
import { render } from 'react-testing-library';

import TabNav from '../index';

describe('<TabNav />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TabNav />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<TabNav />);
    expect(firstChild).toMatchSnapshot();
  });
});
