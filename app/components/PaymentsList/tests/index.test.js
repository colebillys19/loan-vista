import React from 'react';
import { render } from 'react-testing-library';

import PaymentsList from '../index';

describe('<PaymentsList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PaymentsList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<PaymentsList />);
    expect(firstChild).toMatchSnapshot();
  });
});
