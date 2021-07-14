import React from 'react';
import { render } from 'react-testing-library';

import KeywordInput from '../index';

const mockProps = { disabled: false, onChange: jest.fn(), value: 'value' };

const Component = <KeywordInput {...mockProps} />;

describe('<KeywordInput />', () => {
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
