import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import { FETCH_CALLS_DATA } from './constants';

export function* fetchCallsDataSaga() {
  try {
    const callsData = yield call(get, '/api/calls');
    yield put(fetchCallsDataSuccess(callsData));
  } catch (error) {
    yield put(fetchCallsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}
