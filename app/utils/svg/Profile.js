import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { mainBlue } from 'styleConstants';

/* eslint-disable prettier/prettier */
const Profile = (props) => (
  <SvgIcon height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="_02_User" data-name="02 User">
      <path d="m3 61a29 29 0 0 1 58 0z" fill={mainBlue} />
      <path d="m45.544 33.125a46.326 46.326 0 0 1 -4.15 2.568 27.055 27.055 0 0 1 17.533 23.307h-53.854a27.045 27.045 0 0 1 26.927-25 16.555 16.555 0 1 0 -12.512-5.778c2.374-.7 2.322-.755 4.381-1.248a12.483 12.483 0 1 1 8.131 3.026 31.045 31.045 0 0 0 -31 31v2h62v-2a31.03 31.03 0 0 0 -17.456-27.875z" />
    </g>
  </SvgIcon>
);

export default Profile;
