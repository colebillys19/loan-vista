import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorC } from 'styleConstants';

const BulletIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <circle cx="32" cy="31.964" fill={color} r="21" />
  </SvgIcon>
);

BulletIcon.propTypes = { color: T.string, size: T.string };

BulletIcon.defaultProps = { color: iconColorC, size: '3rem' };

export default BulletIcon;
