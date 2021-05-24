import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { formatFilterState } from 'utils/globalHelpers';
import { get } from 'utils/request';
// import makeSelectMain from 'containers/Main/selectors';
import { selectListFilterDomain } from 'containers/ListFilter/selectors';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import makeSelectCalls from './selectors';
import { FETCH_CALLS_DATA } from './constants';

export function* fetchCallsDataSaga({ payload }) {
  try {
    // const loanNumber = yield select(makeSelectMain('loanNumber'));
    const loanNumber = '9937485204';

    if (loanNumber) {
      const { sortCol, sortOrder } = payload;
      const filterState = yield select(selectListFilterDomain);
      const lastFetchParams = yield select(makeSelectCalls('lastFetchParams'));

      const newParams =
        sortCol && sortOrder
          ? { sortCol, sortOrder }
          : formatFilterState(filterState.calls);

      const queryParams = { ...lastFetchParams, ...newParams, loanNumber };
      const endpoint = `/api/calls/?${querystring.stringify(queryParams)}`;

      const { callsData, params } = yield call(get, endpoint);

      yield put(fetchCallsDataSuccess(callsData, params));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchCallsDataFailure(REQUEST_ERROR_MESSAGE));
  }
}

export function* fetchCallsData() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchCallsData()]);
}
