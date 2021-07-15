import {
  fetchPaymentsData,
  fetchPaymentsDataFailure,
  fetchPaymentsDataSuccess,
} from '../actions';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
} from '../constants';

describe('fetchPaymentsData', () => {
  it('behaves as expected when no arguments passed', () => {
    const expected = {
      payload: { sortCol: undefined, sortOrder: undefined },
      type: FETCH_PAYMENTS_DATA,
    };

    expect(fetchPaymentsData()).toEqual(expected);
  });

  it('behaves as expected when arguments passed', () => {
    const expected = {
      payload: { pageToFetch: 1, sortCol: 'date', sortOrder: 'desc' },
      type: FETCH_PAYMENTS_DATA,
    };

    expect(
      fetchPaymentsData({ pageToFetch: 1, sortCol: 'date', sortOrder: 'desc' }),
    ).toEqual(expected);
  });
});

describe('fetchPaymentsDataFailure', () => {
  it('has correct payload and type', () => {
    const error = 'error';
    const expected = { payload: { error }, type: FETCH_PAYMENTS_DATA_FAILURE };

    expect(fetchPaymentsDataFailure(error)).toEqual(expected);
  });
});

describe('fetchPaymentsDataSuccess', () => {
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
      type: FETCH_PAYMENTS_DATA_SUCCESS,
    };

    expect(
      fetchPaymentsDataSuccess({
        pageData: [],
        pageNum: 1,
        params,
        totalPages: 1,
      }),
    ).toEqual(expected);
  });
});
