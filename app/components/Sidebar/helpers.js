const validRoutes = ['/', '/calls', '/emails', '/payments', '/misc'];

export const pathnameIsValid = (pathname) =>
  validRoutes.indexOf(pathname) !== -1;
