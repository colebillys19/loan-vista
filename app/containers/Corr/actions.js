import {
  FETCH_CORR_DATA,
  FETCH_CORR_DATA_FAILURE,
  FETCH_CORR_DATA_SUCCESS,
} from './constants';

export function fetchCorrData() {
  return {
    type: FETCH_CORR_DATA,
  };
}

export function fetchCorrDataFailure(error) {
  return {
    payload: { error },
    type: FETCH_CORR_DATA_FAILURE,
  };
}

export function fetchCorrDataSuccess(corrData) {
  return {
    payload: { corrData },
    type: FETCH_CORR_DATA_SUCCESS,
  };
}
