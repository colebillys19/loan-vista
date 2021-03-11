import React from 'react';
import { render } from 'react-testing-library';

import SubmitField from '../SubmitField';

const mockProps = { disabled: false, onClick: jest.fn() };

const Component = <SubmitField {...mockProps} />;

describe('<SubmitField />', () => {
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
