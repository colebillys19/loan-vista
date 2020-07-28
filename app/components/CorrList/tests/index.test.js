import React from 'react';
import { render } from 'react-testing-library';

import CorrList from '../index';

describe('<CorrList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CorrList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CorrList />);
    expect(firstChild).toMatchSnapshot();
  });
});
