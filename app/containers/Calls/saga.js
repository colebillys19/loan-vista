import { call, put, select, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import makeSelectCalls from './selectors';
// import { getFetchParams } from './helpers';
import { FETCH_CALLS_DATA } from './constants';

export function* fetchCallsDataSaga({ payload }) {
  try {
    const { params: newParams } = payload;
    const stateParams = yield select(makeSelectCalls('fetchParams'));
    const fetchParams = Object.assign({}, stateParams, newParams);
    console.log(fetchParams);
    const callsData = yield call(get, '/api/calls');
    yield put(fetchCallsDataSuccess(callsData));
  } catch (error) {
    yield put(fetchCallsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}
