import iconDictionary from 'utils/iconDictionary';

export const getIcon = (pathname) => {
  switch (pathname) {
    case '/':
      return iconDictionary('profile', '9rem');

    case '/calls':
      return iconDictionary('call', '9rem');

    case '/emails':
      return iconDictionary('mail', '9rem');

    case '/payments':
      return iconDictionary('money', '9rem');

    case '/misc':
      return iconDictionary('folder', '9rem');

    default:
      return iconDictionary('warning', '9rem');
  }
};

export const getTabName = (pathname) => {
  switch (pathname) {
    case '/':
      return '1234567890';

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
