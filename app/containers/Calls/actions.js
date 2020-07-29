import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
} from './constants';

export function fetchCallsData() {
  return {
    type: FETCH_CALLS_DATA,
  };
}

export function fetchCallsDataFailure(error) {
  return {
    payload: { error },
    type: FETCH_CALLS_DATA_FAILURE,
  };
}

export function fetchCallsDataSuccess(callsData) {
  return {
    payload: { callsData },
    type: FETCH_CALLS_DATA_SUCCESS,
  };
}
