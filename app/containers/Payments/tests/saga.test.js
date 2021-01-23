import { all, call, put, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { get } from 'utils/request';

import { fetchPaymentsDataFailure } from '../actions';
import { FETCH_PAYMENTS_DATA } from '../constants';
import watcherSaga, { fetchPaymentsData, fetchPaymentsDataSaga } from '../saga';

describe('fetchPaymentsData Saga', () => {
  const generator = fetchPaymentsData();

  it('should yield takeLatest FETCH_PAYMENTS_DATA', () => {
    const expectedEffect = takeLatest(
      FETCH_PAYMENTS_DATA,
      fetchPaymentsDataSaga,
    );

    expect(generator.next().value).toEqual(expectedEffect);
  });

  it('should be done', () => {
    const isDone = generator.next().done;

    expect(isDone).toBe(true);
  });
});

describe('fetchPaymentsDataSaga Saga', () => {
  const params = {
    dateFrom: '2020-01-01',
    dateTo: '2020-02-01',
    keyword: 'test',
  };
  const generatorA = fetchPaymentsDataSaga({ payload: { params } });
  const generatorB = fetchPaymentsDataSaga({ payload: { params } });

  // revisit this
  it('selects data from state', () => {
    expect(generatorA.next().value.type).toEqual('SELECT');
  });

  it('sends a get request to the server', () => {
    const expectedEffect = call(
      get,
      `/api/payments/?${querystring.stringify(params)}`,
    );

    expect(generatorA.next().value).toEqual(expectedEffect);
  });

  // revisit this
  it('updates state with data returned (if request successful)', () => {
    const {
      payload: {
        action: { type: actionType },
      },
      type: effectType,
    } = generatorA.next({}).value;

    expect(effectType).toEqual('PUT');
    expect(actionType).toEqual('app/Payments/FETCH_PAYMENTS_DATA_SUCCESS');
  });

  it('is done', () => {
    expect(generatorA.next().done).toBe(true);
  });

  it('updates state with error message (if request unsuccessful)', () => {
    generatorB.next();
    const err = REQUEST_ERROR_MESSAGE;
    const actualEffect = generatorB.throw(err).value;
    const expectedEffect = put(fetchPaymentsDataFailure(err));

    expect(actualEffect).toEqual(expectedEffect);
  });
});

describe('watcherSaga Saga', () => {
  const generator = watcherSaga();

  it('should yield watcher saga', () => {
    const expectedEffect = all([fetchPaymentsData()]);

    expect(generator.next().value).toEqual(expectedEffect);
  });
});
