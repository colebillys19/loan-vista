import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { primaryAppColor } from 'styleConstants';

/* eslint-disable prettier/prettier */
const Bullet = (props) => (
  <SvgIcon height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="31.964" fill={primaryAppColor} r="21" />
    <path d="m55 31.964a23 23 0 1 0 -25 22.908v-4.015a19 19 0 1 1 4 0v4.015a23.028 23.028 0 0 0 21-22.908z" />
  </SvgIcon>
);

export default Bullet;
