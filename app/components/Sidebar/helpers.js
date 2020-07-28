const validRoutes = ['/', '/calls', '/corr', '/payments', '/misc'];

export const pathnameIsValid = (pathname) =>
  validRoutes.indexOf(pathname) !== -1;
