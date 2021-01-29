import React from 'react';
import { render } from 'react-testing-library';

import Row from '../Row';

describe('<Row />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Row />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<Row />);
    expect(container.firstChild).toBeDefined();
  });
});
