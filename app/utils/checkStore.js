import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    getState: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
    replaceReducer: isFunction,
    runSaga: isFunction,
    subscribe: isFunction,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
