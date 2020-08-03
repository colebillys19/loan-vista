import iconDictionary from 'utils/iconDictionary';

export const getIcon = (pathname, size) => {
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
      return iconDictionary('profile', size);
  }
};

export const getTabName = (pathname) => {
  switch (pathname) {
    case '/calls':
      return 'Calls';

    case '/emails':
      return 'Emails + Letters';

    case '/payments':
      return 'Payments';

    case '/misc':
      return 'Misc';

    default:
      return '-';
  }
};
