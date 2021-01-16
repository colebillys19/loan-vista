import React from 'react';
import { render } from 'react-testing-library';

import MiscTaxes from '../index';

const mockProps = {};

const Component = <MiscTaxes {...mockProps} />;

describe('<MiscTaxes />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });
});
