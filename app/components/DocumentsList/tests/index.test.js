import React from 'react';
import { render } from 'react-testing-library';

import DocumentsList from '../index';

describe('<DocumentsList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<DocumentsList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<DocumentsList />);
    expect(firstChild).toMatchSnapshot();
  });
});
