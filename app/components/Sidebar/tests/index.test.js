import React from 'react';
import { render } from 'react-testing-library';

import Sidebar from '../index';

describe('<Sidebar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Sidebar />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Sidebar />);
    expect(firstChild).toMatchSnapshot();
  });
});
