import React from 'react';

import {
  CallIcon,
  CashIcon,
  FolderIcon,
  MailIcon,
  ProfileIcon,
  WarningIcon,
} from 'images/icons';

export const getIcon = (pathname, size) => {
  switch (pathname) {
    case '/':
      return <ProfileIcon size={size} />;

    case '/calls':
      return <CallIcon size={size} />;

    case '/documents':
      return <MailIcon size={size} />;

    case '/payments':
      return <CashIcon size={size} />;

    case '/misc':
      return <FolderIcon size={size} />;

    default:
      return <WarningIcon size={size} />;
  }
};

export const getTabName = (pathname) => {
  switch (pathname) {
    case '/calls':
      return 'Calls';

    case '/documents':
      return 'Documents';

    case '/payments':
      return 'Payments';

    case '/misc':
      return 'Misc';

    default:
      return '-';
  }
};
