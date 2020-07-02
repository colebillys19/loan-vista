import { VALID_ROUTES } from './constants';

export const checkRoute = (pathname) => {
  if (pathname === '/' || VALID_ROUTES.indexOf(pathname) === -1) {
    return false;
  }

  return VALID_ROUTES.indexOf(pathname);
};
