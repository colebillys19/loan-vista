/**
 * Spinner
 * @description ...
 */

import React from 'react';

import { SpinnerIcon } from 'images/icons';

import { AnimationWrapper, SpinnerContainer } from './styledComponents';

const Spinner = () => (
  <SpinnerContainer>
    <AnimationWrapper>
      <SpinnerIcon size="5rem" />
    </AnimationWrapper>
  </SpinnerContainer>
);

export default Spinner;
