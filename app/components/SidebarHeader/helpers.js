import iconDictionary from 'utils/iconDictionary';

export const getIcon = (pathname) => {
  switch (pathname) {
    case '/':
      return iconDictionary('profile', '9rem');

    case '/calls':
      return iconDictionary('call', '8.2rem');

    case '/emails':
      return iconDictionary('mail', '9.5rem');

    case '/payments':
      return iconDictionary('money', '10rem');

    case '/misc':
      return iconDictionary('folder', '8.6rem');

    default:
      return iconDictionary('warning', '10rem');
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
