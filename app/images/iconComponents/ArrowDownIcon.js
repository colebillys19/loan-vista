import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorC } from 'styleConstants';

const ArrowDownIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="7 7 10 10"
    {...restProps}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10l5 5 5-5z" fill={color} />
  </SvgIcon>
);

ArrowDownIcon.propTypes = { color: T.string, size: T.string };

ArrowDownIcon.defaultProps = { color: iconColorC, size: '3rem' };

export default ArrowDownIcon;
