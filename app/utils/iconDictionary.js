import React from 'react';

import Call from './svg/Call';
import Calendar from './svg/Calendar';
import Coin from './svg/Coin';
import Folder from './svg/Folder';
import Mail from './svg/Mail';
import Money from './svg/Money';
import Note from './svg/Note';
import Profile from './svg/Profile';
import Warning from './svg/Warning';

export default (name, size) => {
  const icons = {
    call: Call,
    calendar: Calendar,
    coin: Coin,
    folder: Folder,
    mail: Mail,
    money: Money,
    note: Note,
    profile: Profile,
    warning: Warning,
  };

  const Icon = icons[name];

  return <Icon style={{ height: size, width: size }} />;
};
