import {
  fetchLoanData,
  fetchLoanDataFailure,
  fetchLoanDataSuccess,
} from '../actions';
import {
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
} from '../constants';
import { MOCK_DATA } from './mockData';

describe('fetchLoanData', () => {
  it('has correct payload and type', () => {
    const loanNumber = '0123456789';
    const expected = {
      payload: { loanNumber },
      type: FETCH_LOAN_DATA,
    };

    expect(fetchLoanData(loanNumber)).toEqual(expected);
  });
});

describe('fetchLoanDataFailure', () => {
  it('has correct payload and type', () => {
    const error = 'error';
    const expected = { payload: { error }, type: FETCH_LOAN_DATA_FAILURE };

    expect(fetchLoanDataFailure(error)).toEqual(expected);
  });
});

describe('fetchLoanDataSuccess', () => {
  it('has correct payload and type', () => {
    const loanData = MOCK_DATA;
    const loanNumber = '0123456789';
    const expected = {
      payload: { loanData, loanNumber },
      type: FETCH_LOAN_DATA_SUCCESS,
    };

    expect(fetchLoanDataSuccess(loanData, loanNumber)).toEqual(expected);
  });
});
