import React from 'react';
import { SvgIcon } from '@material-ui/core';

import { TempWrapper } from './styledComponents';

const Temp = () => (
  <TempWrapper>
    <SvgIcon style={{ height: '8.4rem', width: '8.4rem' }} viewBox="0 0 84 84">
      <circle fill="#ffffff" r="50%" transform="translate(42, 42)" />
    </SvgIcon>
  </TempWrapper>
);

export default Temp;
