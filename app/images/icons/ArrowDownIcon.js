import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorA } from 'styleConstants';

const ArrowDownIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    style={{ height: size, width: size }}
    {...restProps}
  >
    <path d="M0 0h24v24H0z" fill={color} />
    <path d="M7 10l5 5 5-5z" />
  </SvgIcon>
);

ArrowDownIcon.propTypes = { color: T.string, size: T.string };

ArrowDownIcon.defaultProps = { color: iconColorA, size: '3rem' };

export default ArrowDownIcon;
