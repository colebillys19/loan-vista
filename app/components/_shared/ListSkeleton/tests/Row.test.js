import React from 'react';
import { render } from 'react-testing-library';

import Row from '../Row';

const mockProps = { isError: false };

describe('<Row />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Row {...mockProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<Row {...mockProps} />);
    expect(container.firstChild).toBeDefined();
  });
});
