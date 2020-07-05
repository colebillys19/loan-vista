import iconDictionary from 'utils/iconDictionary';

export const getIcon = (pathname, size = '8rem') => {
  switch (pathname) {
    case '/':
      return iconDictionary('profile', size);

    case '/calls':
      return iconDictionary('call', size);

    case '/emails':
      return iconDictionary('mail', size);

    case '/payments':
      return iconDictionary('money', size);

    case '/misc':
      return iconDictionary('folder', size);

    default:
      return iconDictionary('warning', size);
  }
};

export const getString = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Home';

    case '/calls':
      return 'Calls';

    case '/emails':
      return 'Emails';

    case '/payments':
      return 'Payments';

    case '/misc':
      return 'Misc';

    default:
      return 'Not Found';
  }
};
