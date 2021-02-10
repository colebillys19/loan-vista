import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorC } from 'styleConstants';

const RefreshIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 24 24"
    {...restProps}
  >
    <path d="M0 0h24v24H0V0z" fill="transparent" />
    <path
      d="M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"
      fill={color}
    />
  </SvgIcon>
);

RefreshIcon.propTypes = { color: T.string, size: T.string };

RefreshIcon.defaultProps = { color: iconColorC, size: '3rem' };

export default RefreshIcon;
