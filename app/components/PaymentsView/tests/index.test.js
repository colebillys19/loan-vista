import React from 'react';
import { render } from 'react-testing-library';

import PaymentsView from '../index';

describe('<PaymentsView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PaymentsView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<PaymentsView />);
    expect(firstChild).toMatchSnapshot();
  });
});
