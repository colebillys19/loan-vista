import React from 'react';
import { render } from 'react-testing-library';

import HomeView from '../index';

describe('<HomeView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<HomeView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<HomeView />);
    expect(firstChild).toMatchSnapshot();
  });
});