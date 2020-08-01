import produce from 'immer';

import emailsInitialState from './initialState';
import {
  FETCH_EMAILS_DATA,
  FETCH_EMAILS_DATA_FAILURE,
  FETCH_EMAILS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

export const initialState = emailsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const emailsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_EMAILS_DATA:
        draft.error = false;
        draft.loading = true;
        break;
      case FETCH_EMAILS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        break;
      case FETCH_EMAILS_DATA_SUCCESS:
        const { emailsData } = payload;
        draft.emailsData = emailsData;
        draft.loading = false;
        break;
      case ON_UNMOUNT:
        draft.error = false;
        draft.loading = true;
        break;
    }
  });

export default emailsReducer;
