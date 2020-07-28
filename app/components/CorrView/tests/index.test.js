import React from 'react';
import { render } from 'react-testing-library';

import CorrView from '../index';

describe('<CorrView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CorrView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CorrView />);
    expect(firstChild).toMatchSnapshot();
  });
});
