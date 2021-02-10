import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorA, iconColorC } from 'styleConstants';

const GroupIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <g>
      <path
        d="m3 55h44.08c0-8.208-8.561-13.58-16.774-14.986a11.1 11.1 0 1 0 -16.286-9.783 11.164 11.164 0 0 0 5.754 9.783c-8.258 1.414-16.774 6.806-16.774 14.986z"
        fill={colorA}
      />
      <path
        d="m52.606 30.523a28.051 28.051 0 0 0 -3.974-1.6 13.158 13.158 0 0 0 -9.672-21.923 13.033 13.033 0 0 0 -12.655 10.165c-.417-.04-.838-.064-1.265-.064a13.158 13.158 0 0 0 -9.661 21.939c-7.505 2.414-14.379 7.918-14.379 15.96a2 2 0 0 0 2 2h44.08a2 2 0 0 0 2-2c0-8.042-6.874-13.547-14.379-15.96a13.191 13.191 0 0 0 -4.523-20.869 8.995 8.995 0 0 1 17.8 1.96 9.151 9.151 0 0 1 -4.717 8.031 2 2 0 0 0 .626 3.723 25.3 25.3 0 0 1 6.938 2.22c4.3 2.145 7.143 5.335 7.943 8.794h-10.483a19.852 19.852 0 0 1 2.783 4h9.932a2 2 0 0 0 2-2c0-5.755-3.883-11.128-10.394-14.376zm-18.546-.292a9.151 9.151 0 0 1 -4.717 8.031 2 2 0 0 0 .626 3.724c9.037 1.547 13.791 6.456 14.871 11.014h-39.6c1.08-4.558 5.834-9.467 14.871-11.014a2 2 0 0 0 .626-3.724 9.1 9.1 0 1 1 13.323-8.031z"
        fill={colorB}
      />
    </g>
  </SvgIcon>
);

GroupIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

GroupIcon.defaultProps = {
  colorA: iconColorA,
  colorB: iconColorC,
  size: '3rem',
};

export default GroupIcon;
