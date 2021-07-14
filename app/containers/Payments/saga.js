import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { formatFilterState } from 'utils/globalHelpers';
import { get } from 'utils/request';
// import makeSelectMain from 'containers/Main/selectors';
import { selectListFilterDomain } from 'containers/ListFilter/selectors';

import { fetchPaymentsDataFailure, fetchPaymentsDataSuccess } from './actions';
import makeSelectPayments from './selectors';
import { FETCH_PAYMENTS_DATA } from './constants';

export function* fetchPaymentsDataSaga({ payload }) {
  try {
    // hard-coded temporarily
    const loanNumber = '9937485204';
    // const loanNumber = yield select(makeSelectMain('loanNumber'));
    const itemsPerPage = yield select(makeSelectPayments('itemsPerPage'));

    const { pageToFetch = 1, sortCol, sortOrder } = payload;
    const filterState = yield select(selectListFilterDomain);
    const lastFetchParams = yield select(makeSelectPayments('lastFetchParams'));
    const newParams =
      sortCol && sortOrder
        ? { sortCol, sortOrder }
        : formatFilterState(filterState.payments);

    const queryParams = {
      ...lastFetchParams,
      ...newParams,
      itemsPerPage,
      loanNumber,
      pageToFetch,
    };
    const endpoint = `/api/payments/?${querystring.stringify(queryParams)}`;

    const { pageData, params, totalPages } = yield call(get, endpoint);

    yield put(
      fetchPaymentsDataSuccess({
        pageData,
        pageNum: pageToFetch,
        params,
        totalPages,
      }),
    );
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchPaymentsDataFailure(REQUEST_ERROR_MESSAGE));
  }
}

export function* fetchPaymentsData() {
  yield takeLatest(FETCH_PAYMENTS_DATA, fetchPaymentsDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchPaymentsData()]);
}
