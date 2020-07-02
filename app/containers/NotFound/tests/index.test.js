import React from 'react';
import { render } from 'react-testing-library';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<NotFound />);
    expect(firstChild).toMatchSnapshot();
  });
});
