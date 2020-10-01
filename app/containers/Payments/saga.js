import { call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { get } from 'utils/request';

import { fetchPaymentsDataFailure, fetchPaymentsDataSuccess } from './actions';
import makeSelectPayments from './selectors';
import { FETCH_PAYMENTS_DATA } from './constants';

export function* fetchPaymentsDataSaga({ payload }) {
  try {
    const { params: newParams } = payload;
    const stateParams = yield select(makeSelectPayments('fetchParams'));
    const combinedParams = Object.assign({}, stateParams, newParams);

    const { paymentsData, newFetchParams } = yield call(
      get,
      `/api/payments/?${querystring.stringify(combinedParams)}`,
    );

    yield put(fetchPaymentsDataSuccess(paymentsData, newFetchParams));
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(
      fetchPaymentsDataFailure(
        'something unexpected happened while retrieving data from the server',
      ),
    );
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_PAYMENTS_DATA, fetchPaymentsDataSaga);
}
