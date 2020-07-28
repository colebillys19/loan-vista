const validRoutes = ['/', '/calls', '/correspondence', '/payments', '/misc'];

export const pathnameIsValid = (pathname) =>
  validRoutes.indexOf(pathname) !== -1;
