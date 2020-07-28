import React from 'react';
import { render } from 'react-testing-library';

import CallsList from '../index';

describe('<CallsList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CallsList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CallsList />);
    expect(firstChild).toMatchSnapshot();
  });
});
