import React from 'react';
import { render } from 'react-testing-library';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import ListFilter from '../index';

const mockProps = {
  dateFrom: null,
  dateFromError: '',
  dateRange: 0,
  dateTo: null,
  dateToError: '',
  handleDateFromChange: jest.fn(),
  handleDateRangeChange: jest.fn(),
  handleDateToChange: jest.fn(),
  handleKeywordChange: jest.fn(),
  handleRefreshClick: jest.fn(),
  handleSubmitClick: jest.fn(),
  keyword: '',
};

const Component = (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ListFilter {...mockProps} />
  </MuiPickersUtilsProvider>
);

describe('<ListFilter />', () => {
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
