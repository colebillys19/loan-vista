import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchPaymentsDataFailure, fetchPaymentsDataSuccess } from './actions';
import { FETCH_PAYMENTS_DATA } from './constants';

export function* fetchPaymentsDataSaga() {
  try {
    const paymentsData = yield call(get, '/api/payments');
    yield put(fetchPaymentsDataSuccess(paymentsData));
  } catch (error) {
    yield put(fetchPaymentsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_PAYMENTS_DATA, fetchPaymentsDataSaga);
}
