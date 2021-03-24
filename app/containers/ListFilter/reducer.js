import produce from 'immer';

import initialState from './initialState';
import { UPDATE_FILTER_STATE } from './constants';

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const listFilterReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case UPDATE_FILTER_STATE:
        const { newValues, substate } = payload;
        draft[substate] = newValues;
        break;
    }
  });

export default listFilterReducer;
