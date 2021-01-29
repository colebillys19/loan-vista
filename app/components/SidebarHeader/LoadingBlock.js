import React from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/icons';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import Spinner from 'components/_base-ui/Spinner';

import { LoadingBlockContainer } from './styledComponents';

const LoadingBlock = ({ error }) => (
  <LoadingBlockContainer>
    <ConditionalRender
      Component={WarningIcon}
      FallbackComponent={Spinner}
      propsToPassDown={{ size: '5rem' }}
      shouldRender={!!error}
    />
  </LoadingBlockContainer>
);

LoadingBlock.propTypes = { error: T.oneOfType([T.bool, T.string]).isRequired };

export default LoadingBlock;
