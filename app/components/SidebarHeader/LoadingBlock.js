import React from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/icons';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import Spinner from 'components/_base-ui/Spinner';

import { SpinnerBlockContainer } from './styledComponents';

const SpinnerBlock = ({ error }) => (
  <SpinnerBlockContainer>
    <ConditionalRender
      Component={WarningIcon}
      FallbackComponent={Spinner}
      propsToPassDown={{ size: '5rem' }}
      shouldRender={!!error}
    />
  </SpinnerBlockContainer>
);

SpinnerBlock.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default SpinnerBlock;
