import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { iconColorA, iconColorB } from 'styleConstants';

const MailIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <g>
      <path d="m32 31.999-29-19.999v40h58v-40z" fill={colorB} />
      <path
        d="m61 10.013v-.013h-58v.013a1.977 1.977 0 0 0 -2 1.987v40a2 2 0 0 0 2 2h58a2 2 0 0 0 2-2v-40a1.977 1.977 0 0 0 -2-1.987zm-6.423 3.987-22.577 15.569-22.577-15.569zm4.423 36h-54v-34.191l16.3 11.241-12.3 8.609v4.882l15.813-11.068 6.051 4.173a2.007 2.007 0 0 0 2.272 0l6.051-4.173 19.813 13.868zm0-11.541-16.3-11.409 16.3-11.241z"
        fill={colorA}
      />
    </g>
  </SvgIcon>
);

MailIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

MailIcon.defaultProps = {
  colorA: iconColorA,
  colorB: iconColorB,
  size: '3rem',
};

export default MailIcon;
