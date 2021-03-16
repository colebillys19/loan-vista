import React from 'react';
import { render } from 'react-testing-library';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { checkBasicRendering } from 'utils/testingHelpers';

import ListFilter from '../index';

const mockProps = {
  dispatchFetchData: jest.fn(),
  fetchParams: {
    currentTotal: '80',
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
};

const component = (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ListFilter {...mockProps} />
  </MuiPickersUtilsProvider>
);

describe('<ListFilter />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(component);

    expect(spy).not.toHaveBeenCalled();
  });

  checkBasicRendering(component);
});
