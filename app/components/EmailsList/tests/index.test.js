import React from 'react';
import { render } from 'react-testing-library';

import EmailsList from '../index';

describe('<EmailsList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<EmailsList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<EmailsList />);
    expect(firstChild).toMatchSnapshot();
  });
});
