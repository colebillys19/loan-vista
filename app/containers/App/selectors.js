import { createSelector } from 'reselect';

const selectRouter = (state) => state.router;

const makeSelectPathname = () =>
  createSelector(
    selectRouter,
    (routerState) => routerState.location.pathname,
  );

export { makeSelectPathname };
