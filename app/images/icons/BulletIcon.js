import React from 'react';
import T from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

import { iconColorA } from 'styleConstants';

const BulletIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    viewBox="0 0 64 64"
    style={{ height: size, width: size }}
    {...restProps}
  >
    <circle cx="32" cy="31.964" fill={color} r="21" />
  </SvgIcon>
);

BulletIcon.propTypes = { color: T.string, size: T.string };

BulletIcon.defaultProps = { color: iconColorA, size: '3rem' };

export default BulletIcon;
