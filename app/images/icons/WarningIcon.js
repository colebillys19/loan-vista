import React from 'react';
import T from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

import { iconColorA, iconColorB } from 'styleConstants';

const WarningIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <path
      d="m31.396 7.5-28.396 48.24v1.76h29 29v-1.76l-28.396-48.24z"
      fill="transparent"
    />
    <path d="m30 47.5h4v4h-4z" fill={colorA} />
    <path d="m30 24.244h4v19.256h-4z" fill={colorA} />
    <path
      d="m33.748 5.5h-3.496l-29.252 49.695v4.305h33v-4h-28.538l26.538-45.084 26.538 45.084h-20.538v4h25v-4.305z"
      fill={colorB}
    />
  </SvgIcon>
);

WarningIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

WarningIcon.defaultProps = {
  colorA: iconColorA,
  colorB: iconColorB,
  size: '3rem',
};

export default WarningIcon;
