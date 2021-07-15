import {
  fetchCallsData,
  fetchCallsDataFailure,
  fetchCallsDataSuccess,
} from '../actions';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
} from '../constants';

describe('fetchCallsData', () => {
  it('behaves as expected when no arguments passed', () => {
    const expected = {
      payload: { sortCol: undefined, sortOrder: undefined },
      type: FETCH_CALLS_DATA,
    };

    expect(fetchCallsData()).toEqual(expected);
  });

  it('behaves as expected when arguments passed', () => {
    const expected = {
      payload: { pageToFetch: 1, sortCol: 'date', sortOrder: 'desc' },
      type: FETCH_CALLS_DATA,
    };

    expect(
      fetchCallsData({ pageToFetch: 1, sortCol: 'date', sortOrder: 'desc' }),
    ).toEqual(expected);
  });
});

describe('fetchCallsDataFailure', () => {
  it('has correct payload and type', () => {
    const error = 'error';
    const expected = { payload: { error }, type: FETCH_CALLS_DATA_FAILURE };

    expect(fetchCallsDataFailure(error)).toEqual(expected);
  });
});

describe('fetchCallsDataSuccess', () => {
  it('has correct payload and type', () => {
    const params = {
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = {
      payload: {
        pageData: [],
        pageNum: 1,
        params,
        totalPages: 1,
      },
      type: FETCH_CALLS_DATA_SUCCESS,
    };

    expect(
      fetchCallsDataSuccess({
        pageData: [],
        pageNum: 1,
        params,
        totalPages: 1,
      }),
    ).toEqual(expected);
  });
});
