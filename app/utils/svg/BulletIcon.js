import React from 'react';
import T from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

import { appColorA } from 'styleConstants';

const BulletIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    viewBox="0 0 64 64"
    style={{ height: size, width: size }}
    {...restProps}
  >
    <circle cx="32" cy="31.964" fill={color || appColorA} r="21" />
    <path d="m55 31.964a23 23 0 1 0 -25 22.908v-4.015a19 19 0 1 1 4 0v4.015a23.028 23.028 0 0 0 21-22.908z" />
  </SvgIcon>
);

BulletIcon.propTypes = { color: T.string, size: T.string };

BulletIcon.defaultProps = { color: appColorA };

export default BulletIcon;
