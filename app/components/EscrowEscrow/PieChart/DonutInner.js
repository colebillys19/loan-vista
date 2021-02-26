import React from 'react';
import { SvgIcon } from '@material-ui/core';

import { DonutInnerWrapper } from './styledComponents';

const DonutInner = () => (
  <DonutInnerWrapper>
    <SvgIcon style={{ height: '100%', width: '100%' }} viewBox="0 0 196 196">
      <path
        d="M98,0 C152.123905,0 196,43.8760945 196,98 C196,152.123905 152.123905,196 98,196 C43.8760945,196 0,152.123905 0,98 C0,43.8760945 43.8760945,0 98,0 Z M98,54 C73.699471,54 54,73.699471 54,98 C54,122.300529 73.699471,142 98,142 C122.300529,142 142,122.300529 142,98 C142,73.699471 122.300529,54 98,54 Z"
        fill="rgb(255, 255, 255)"
      />
    </SvgIcon>
  </DonutInnerWrapper>
);

export default DonutInner;
