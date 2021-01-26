import {
  fetchPaymentsData,
  fetchPaymentsDataFailure,
  fetchPaymentsDataSuccess,
  onUnmount,
  setLoadingTrue,
} from '../actions';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
  SET_LOADING_TRUE,
} from '../constants';
import { MOCK_DATA } from './mockData';

describe('fetchPaymentsData', () => {
  it('has correct payload and type', () => {
    const params = {
      dateFrom: '2020-10-13',
      dateTo: '2020-11-18',
      keyword: 'test',
    };
    const expected = { payload: { params }, type: FETCH_PAYMENTS_DATA };

    expect(fetchPaymentsData(params)).toEqual(expected);
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
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = {
      payload: { newFetchParams, paymentsData },
      type: FETCH_PAYMENTS_DATA_SUCCESS,
    };

    expect(fetchPaymentsDataSuccess(paymentsData, newFetchParams)).toEqual(
      expected,
    );
  });
});

describe('onUnmount', () => {
  it('has correct type', () => {
    expect(onUnmount()).toEqual({ type: ON_UNMOUNT });
  });
});

describe('setLoadingTrue', () => {
  it('has correct type', () => {
    expect(setLoadingTrue()).toEqual({ type: SET_LOADING_TRUE });
  });
});
