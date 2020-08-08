import React from 'react';
import { render } from 'react-testing-library';

import DocumentsView from '../index';

describe('<DocumentsView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<DocumentsView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<DocumentsView />);
    expect(firstChild).toMatchSnapshot();
  });
});
