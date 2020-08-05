import React from 'react';
import { render } from 'react-testing-library';

import ListFilter from '../index';

describe('<ListFilter />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListFilter />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ListFilter />);
    expect(firstChild).toMatchSnapshot();
  });
});
