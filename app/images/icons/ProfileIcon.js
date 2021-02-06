import React from 'react';
import T from 'prop-types';
import { SvgIcon } from '@material-ui/core';

import { appColorA, appColorB } from 'styleConstants';

const ProfileIcon = ({ colorA, colorB, size, ...restProps }) => (
  <SvgIcon
    style={{ height: size, width: size }}
    viewBox="0 0 64 64"
    {...restProps}
  >
    <g>
      <path d="m3 61a29 29 0 0 1 58 0z" fill={colorB} />
      <path
        d="m45.544 33.125a46.326 46.326 0 0 1 -4.15 2.568 27.055 27.055 0 0 1 17.533 23.307h-53.854a27.045 27.045 0 0 1 26.927-25 16.555 16.555 0 1 0 -12.512-5.778c2.374-.7 2.322-.755 4.381-1.248a12.483 12.483 0 1 1 8.131 3.026 31.045 31.045 0 0 0 -31 31v2h62v-2a31.03 31.03 0 0 0 -17.456-27.875z"
        fill={colorA}
      />
    </g>
  </SvgIcon>
);

ProfileIcon.propTypes = { colorA: T.string, colorB: T.string, size: T.string };

ProfileIcon.defaultProps = {
  colorA: appColorA,
  colorB: appColorB,
  size: '3rem',
};

export default ProfileIcon;
