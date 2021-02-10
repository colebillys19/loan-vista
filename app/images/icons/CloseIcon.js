import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorC } from 'styleConstants';

const CloseIcon = ({ color, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 100 100"
    {...restProps}
  >
    <path
      d="M92.52,79.86A9,9,0,0,1,79.86,92.52L50,62.69,20.14,92.52A9,9,0,0,1,7.48,79.86L37.34,50,7.48,20.14A9,9,0,0,1,20.14,7.48L50,37.34,79.86,7.48A9,9,0,0,1,92.52,20.14L62.66,50Z"
      fill={color}
    />
  </SvgIcon>
);

CloseIcon.propTypes = { color: T.string, size: T.string };

CloseIcon.defaultProps = { color: iconColorC, size: '3rem' };

export default CloseIcon;
