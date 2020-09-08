import { call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { get } from 'utils/request';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import makeSelectCalls from './selectors';
import { FETCH_CALLS_DATA } from './constants';

export function* fetchCallsDataSaga({ payload }) {
  try {
    const { params: newParams } = payload;
    const stateParams = yield select(makeSelectCalls('fetchParams'));
    const queryParams = querystring.stringify(
      Object.assign({}, stateParams, newParams),
    );
    const { callsData, newFetchParams } = yield call(
      get,
      `/api/calls/?${queryParams}`,
    );
    yield put(fetchCallsDataSuccess(callsData, newFetchParams));
  } catch (error) {
    yield put(fetchCallsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}
