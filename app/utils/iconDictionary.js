import React from 'react';

import Call from './svg/Call';
import Folder from './svg/Folder';
import Mail from './svg/Mail';
import Money from './svg/Money';
import Profile from './svg/Profile';
import Warning from './svg/Warning';

export default (name, size) => {
  const icons = {
    call: Call,
    folder: Folder,
    mail: Mail,
    money: Money,
    profile: Profile,
    warning: Warning,
  };

  const Icon = icons[name];

  return <Icon style={{ height: size, width: size }} />;
};
