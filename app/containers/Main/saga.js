import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchLoanDataFailure, fetchLoanDataSuccess } from './actions';
import { FETCH_LOAN_DATA } from './constants';

export function* fetchLoanDataSaga() {
  try {
    const loanData = yield call(get, '/api/loan');
    yield put(fetchLoanDataSuccess(loanData));
  } catch (error) {
    yield put(fetchLoanDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_LOAN_DATA, fetchLoanDataSaga);
}
