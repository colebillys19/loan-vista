import { VALID_ROUTES } from './constants';

export const checkRoute = (pathname) =>
  pathname !== '/' || VALID_ROUTES.indexOf(pathname) !== -1
    ? VALID_ROUTES.indexOf(pathname)
    : false;
