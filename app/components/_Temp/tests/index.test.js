import React from 'react';
import { render } from 'react-testing-library';

import Temp from '../index';

describe('<Temp />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Temp />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Temp />);
    expect(firstChild).toMatchSnapshot();
  });
});
