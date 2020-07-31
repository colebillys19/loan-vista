import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchCorrDataFailure, fetchCorrDataSuccess } from './actions';
import { FETCH_CORR_DATA } from './constants';

export function* fetchCorrDataSaga() {
  try {
    const corrData = yield call(get, '/api/correspondence');
    yield put(fetchCorrDataSuccess(corrData));
  } catch (error) {
    yield put(fetchCorrDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_CORR_DATA, fetchCorrDataSaga);
}
