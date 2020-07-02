import React from 'react';
import { render } from 'react-testing-library';

import EscrowView from '../index';

describe('<EscrowView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<EscrowView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<EscrowView />);
    expect(firstChild).toMatchSnapshot();
  });
});
