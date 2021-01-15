import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { get } from 'utils/request';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import makeSelectCalls from './selectors';
import { FETCH_CALLS_DATA, fetchCallsDataErrorMessage } from './constants';

export function* fetchCallsDataSaga({ payload }) {
  try {
    const { params: newParams } = payload;
    const stateParams = yield select(makeSelectCalls('fetchParams'));
    const combinedParams = Object.assign({}, stateParams, newParams);

    const { callsData, newFetchParams } = yield call(
      get,
      `/api/calls/?${querystring.stringify(combinedParams)}`,
    );

    yield put(fetchCallsDataSuccess(callsData, newFetchParams));
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchCallsDataFailure(fetchCallsDataErrorMessage));
  }
}

export function* fetchCallsData() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchCallsData()]);
}
