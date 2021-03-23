import React from 'react';
import { render } from 'react-testing-library';

import DocumentsList from '../index';

import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = {
  dispatchFetchDocumentsData: jest.fn(),
  documentsData: MOCK_DATA,
  headers: MOCK_HEADERS,
  sortLoading: false,
  sortValues: { sortCol: '', sortOrder: '' },
};

const Component = <DocumentsList {...mockProps} />;

describe('<DocumentsList />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  // it('Should render and match the snapshot', () => {
  //   const {
  //     container: { firstChild },
  //   } = render(Component);
  //   expect(firstChild).toMatchSnapshot();
  // });
  it('', () => {
    expect(false).toBeTruthy();
  });
});
