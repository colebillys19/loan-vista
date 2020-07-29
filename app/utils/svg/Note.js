import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { appColorA } from 'styleConstants';

/* eslint-disable prettier/prettier */
const Note = (props) => (
  <SvgIcon height="504px" version="1.1" viewBox="0 0 403 504" width="403px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <g>
      <polygon fill={appColorA} points="16.011719 16 386.867188 16 386.867188 488 16.011719 488"></polygon>
      <path d="M32,472 L32,64 L0,64 L0,488 C0.0273438,496.824219 7.175781,503.972656 16,504 L386.878906,504 C395.707031,503.972656 402.855469,496.824219 402.878906,488 L402.878906,472 L32,472 Z M386.878906,0 L16,0 C7.175781,0.0273438 0.0273438,7.175781 0,16 L0,32 L370.878906,32 L370.878906,440 L402.878906,440 L402.878906,16 C402.855469,7.175781 395.707031,0.0273438 386.878906,0 Z" fill="#000000"></path>
      <polygon fill="#000000" points="99 112 303.86 112 303.86 154 99 154"></polygon>
      <polygon  fill="#000000" points="99 350 303.86 350 303.86 392 99 392"></polygon>
      <polygon  fill="#000000" points="99 231 303.86 231 303.86 273 99 273"></polygon>
    </g>
  </SvgIcon>
);

export default Note;
