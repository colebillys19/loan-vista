import React from 'react';
import { render } from 'react-testing-library';

import DocumentsView from '../index';

import { MOCK_DATA } from './mockData';

const mockProps = { documentsData: MOCK_DATA, loading: false };

const Component = <DocumentsView {...mockProps} />;

describe('<DocumentsView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
