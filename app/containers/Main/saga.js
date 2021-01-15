import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchLoanDataFailure, fetchLoanDataSuccess } from './actions';
import { FETCH_LOAN_DATA } from './constants';

export function* fetchLoanDataSaga() {
  try {
    const { loanData, loanNumber } = yield call(get, '/api/loan');
    yield put(fetchLoanDataSuccess(loanData, loanNumber));
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(
      fetchLoanDataFailure(
        'something unexpected happened while retrieving data',
      ),
    );
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_LOAN_DATA, fetchLoanDataSaga);
}
