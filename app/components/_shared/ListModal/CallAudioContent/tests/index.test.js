import React from 'react';
import { render } from 'react-testing-library';

import CallAudioContent from '../index';

const mockProps = {};

const Component = <CallAudioContent {...mockProps} />;

describe('<CallAudioContent />', () => {
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
