import { all, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';

import { fetchPaymentsDataFailure } from '../actions';
import { FETCH_PAYMENTS_DATA } from '../constants';
import initialState from '../initialState';
import watcherSaga, { fetchPaymentsData, fetchPaymentsDataSaga } from '../saga';

import { MOCK_DATA } from './mockData';

describe('fetchPaymentsData Saga', () => {
  const generator = fetchPaymentsData();

  it('calls fetchPaymentsDataSaga when FETCH_PAYMENTS_DATA action is dispatched', () => {
    const expectedEffect = takeLatest(
      FETCH_PAYMENTS_DATA,
      fetchPaymentsDataSaga,
    );

    expect(generator.next().value).toEqual(expectedEffect);
  });

  it('is done', () => {
    const isDone = generator.next().done;

    expect(isDone).toBe(true);
  });
});

describe('fetchPaymentsDataSaga Saga', () => {
  const params = { sortCol: '', sortOrder: '' };
  const generatorA = fetchPaymentsDataSaga({ payload: { params } });
  const generatorB = fetchPaymentsDataSaga({ payload: { params } });

  // it('selects loan number from state', () => {
  //   expect(generatorA.next().value.type).toEqual('SELECT');
  // });

  it('selects current filter values from state', () => {
    expect(generatorA.next({ loanNumber: '1234567890' }).value.type).toEqual(
      'SELECT',
    );
  });

  it('selects last fetch params from state', () => {
    expect(generatorA.next({ payments: initialState }).value.type).toEqual(
      'SELECT',
    );
  });

  it('fetches data from the server', () => {
    expect(generatorA.next().value.type).toEqual('CALL');
  });

  it('updates state with data fetched', () => {
    expect(
      generatorA.next({
        params: initialState.lastFetchParams,
        paymentsData: MOCK_DATA,
      }).value.type,
    ).toEqual('PUT');
  });

  it('is done', () => {
    expect(generatorA.next().done).toBe(true);
  });

  it('updates state with error message if fetch unsuccessful', () => {
    generatorB.next();
    const err = REQUEST_ERROR_MESSAGE;
    const actualEffect = generatorB.throw(err).value;
    const expectedEffect = put(fetchPaymentsDataFailure(err));

    expect(actualEffect).toEqual(expectedEffect);
  });
});

describe('watcherSaga Saga', () => {
  const generator = watcherSaga();

  it('monitors all dispatched actions', () => {
    const expectedEffect = all([fetchPaymentsData()]);

    expect(generator.next().value).toEqual(expectedEffect);
  });

  it('is done', () => {
    expect(generator.next().done).toBe(true);
  });
});
