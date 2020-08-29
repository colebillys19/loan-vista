import React from 'react';
import { render } from 'react-testing-library';

import NotFoundView from '../index';

describe('<NotFoundView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NotFoundView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<NotFoundView />);
    expect(firstChild).toMatchSnapshot();
  });
});
