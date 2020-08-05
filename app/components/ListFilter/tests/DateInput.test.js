import React from 'react';
import { render } from 'react-testing-library';

import DateInput from '../DateInput';

describe('<DateInput />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<DateInput />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<DateInput />);
    expect(firstChild).toMatchSnapshot();
  });
});
