import { all, call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { get } from 'utils/request';

import { fetchLoanDataFailure, fetchLoanDataSuccess } from './actions';
import { FETCH_LOAN_DATA } from './constants';

export function* fetchLoanDataSaga() {
  try {
    const { loanData, loanNumber } = yield call(get, '/api/loan');
    yield put(fetchLoanDataSuccess(loanData, loanNumber));
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchLoanDataFailure(REQUEST_ERROR_MESSAGE));
  }
}

export function* fetchLoanData() {
  yield takeLatest(FETCH_LOAN_DATA, fetchLoanDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchLoanData()]);
}
