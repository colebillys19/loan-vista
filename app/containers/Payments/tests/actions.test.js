import {
  fetchPaymentsData,
  fetchPaymentsDataFailure,
  fetchPaymentsDataSuccess,
  setLoadingTrue,
} from '../actions';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  SET_LOADING_TRUE,
} from '../constants';
import { MOCK_DATA } from './mockData';

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
      payload: { sortCol: 'date', sortOrder: 'desc' },
      type: FETCH_PAYMENTS_DATA,
    };

    expect(fetchPaymentsData('date', 'desc')).toEqual(expected);
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
    const paymentsData = MOCK_DATA;
    const params = {
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = {
      payload: { params, paymentsData },
      type: FETCH_PAYMENTS_DATA_SUCCESS,
    };

    expect(fetchPaymentsDataSuccess(paymentsData, params)).toEqual(expected);
  });
});

describe('setLoadingTrue', () => {
  it('has correct type', () => {
    expect(setLoadingTrue()).toEqual({ type: SET_LOADING_TRUE });
  });
});
