import { VALID_ROUTES } from './constants';

export const checkRoute = (pathname) =>
  VALID_ROUTES.includes(pathname) ? VALID_ROUTES.indexOf(pathname) : false;
