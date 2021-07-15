import React from 'react';
import T from 'prop-types';

import { WarningIcon } from 'images/iconComponents';
import ConditionalRender from 'components/_shared/ConditionalRender';
import Spinner from 'components/_shared/Spinner';

import { FallbackBlockContainer } from './styledComponents';

const FallbackBlock = ({ hideIcon, isError }) => (
  <FallbackBlockContainer>
    <ConditionalRender
      Component={WarningIcon}
      FallbackComponent={!hideIcon ? Spinner : null}
      propsToPassDown={{ size: '5rem' }}
      shouldRender={isError}
    />
  </FallbackBlockContainer>
);

FallbackBlock.propTypes = { hideIcon: T.bool, isError: T.bool };

FallbackBlock.defaultProps = { isError: false };

export default FallbackBlock;
