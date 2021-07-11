import React from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_shared/ConditionalRender';
import Spinner from 'components/_shared/Spinner';

import { FallbackBlockContainer } from './styledComponents';

const FallbackBlock = ({ error, hideIcon }) => (
  <FallbackBlockContainer>
    <ConditionalRender
      Component={WarningIcon}
      FallbackComponent={!hideIcon ? Spinner : null}
      propsToPassDown={{ size: '5rem' }}
      shouldRender={!!error}
    />
  </FallbackBlockContainer>
);

FallbackBlock.propTypes = {
  error: T.oneOfType([T.bool, T.string]).isRequired,
  hideIcon: T.bool,
};

export default FallbackBlock;
