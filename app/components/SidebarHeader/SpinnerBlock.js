import React from 'react';

import Spinner from 'components/_base-ui/Spinner';

import { SpinnerBlockContainer } from './styledComponents';

const SpinnerBlock = () => (
  <SpinnerBlockContainer>
    <Spinner />
  </SpinnerBlockContainer>
);

export default SpinnerBlock;
